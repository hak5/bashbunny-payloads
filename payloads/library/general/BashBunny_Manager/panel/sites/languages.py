import os, os.path, re, cgi


class languages:

    def GET(self, handler):

        ret = open('templates/main.tpl').read()
        ret = ret.replace('{{ title }}', 'Languages').replace('{{ content }}', self.generateLanguageList())
        ret = ret.replace('{{ buttons }}', '''
              <button class="btn btn-sm btn-outline-secondary" id="upload_button">
                <span data-feather="upload"></span> Import
              </button>
              <form id="upload_form" method="POST" enctype="multipart/form-data" style="display:none">
                <input type="hidden" name="action" value="upload">
                <input type="hidden" name="filename" value="" id="upload_filename">
                <input type="file" name="file" id="upload_field" accept=".json">
              </form>
              ''')
        ret = ret.replace('{{ javascript }}', '''$("table").each(function(i, table) { $(table).DataTable() });
            $("#upload_button").click(() => {
                $("#upload_field").click();
            });
            $("#upload_field").change(() => {
                $("#upload_filename").val($("#upload_field").val());
                $("#upload_form").submit();
            });''')
        return ret
    

    def POST(self, data, handler):
        
        if 'set_lang' in data:
            language = data['set_lang'][0]
            config_path = os.path.join('..', '..', '..', 'config.txt')
            language_path = os.path.join('..', '..', '..', 'languages', '{0}.json'.format(language))
            if os.path.isfile(language_path):
                open(config_path, 'w+').write('#!/bin/bash\nDUCKY_LANG {0}'.format(language))
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/languages" /></head></html>'
        elif 'del_lang' in data:
            language = data['del_lang'][0]
            language_path = os.path.join('..', '..', '..', 'languages', '{0}.json'.format(language))
            if os.path.isfile(language_path):
                os.unlink(language_path)
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/languages" /></head></html>'
        elif 'action' in data and data['action'][0] == 'upload':
            filename = data['filename'][0].split('\\')[-1].split('/')[-1]
            path = os.path.join('..', '..', '..', 'languages', filename)
            open(path, 'w+').write(data['file'][0])
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/languages" /></head></html>'
        
        return '...'

    
    def generateLanguageList(self):

        config_path = os.path.join('..', '..', '..', 'config.txt')
        config = None
        try:
            config = open(config_path, 'rw+').read()
        except:
            return 'Error opening config file.'

        current_lang = self.getAttribute('DUCKY_LANG', config, 'us')
        print(current_lang)


        ret = '''
                        <div class="table-responsive">
                            <table id="lang_table" class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>Language</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>'''
        d = os.path.join('..', '..', '..', 'languages')
        languages = [f[:-5] for f in os.listdir(d)  if os.path.isfile(os.path.join(d, f)) and not f.startswith('.')]
        for language in languages:
            if language != current_lang:
                set_html = '''<form method="POST">
                                <button type="submit" name="del_lang" value="{0}" class="btn btn-danger btn-sm"><span data-feather="trash-2"></span></button>
                                <button type="submit" name="set_lang" value="{0}" class="btn btn-success btn-sm">Set language</button>
                            </form>'''.format(language)
            else:
                set_html = '<button class="btn btn-info btn-sm">Active</button>'
            ret += '''
                                    <tr>
                                        <td>{0}</td>
                                        <td style="float:right">{1}</td>
                                    </tr>'''.format(language, set_html)

        ret += '''
                                </tbody>
                            </table>
                        </div>'''
        return ret
    

    def getAttribute(self, attribute, data, org):
        matches = re.findall('^{0} .*$'.format(attribute), data, re.MULTILINE)
        if len(matches) == 0:
            return org
        ret = matches[0].replace('{0} '.format(attribute), '').strip()
        return cgi.escape(ret).encode('ascii', 'xmlcharrefreplace')
