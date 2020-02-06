import os.path, re, cgi, distutils.dir_util, zipfile


class index:

    def GET(self, handler):

        ret = open('templates/main.tpl').read()
        ret = ret.replace('{{ title }}', 'Payloads').replace('{{ content }}', self.generatePayloadList())
        ret = ret.replace('{{ buttons }}', '''
              <button class="btn btn-sm btn-outline-secondary" id="upload_button">
                <span data-feather="upload"></span> Import
              </button>
              <form id="upload_form" method="POST" enctype="multipart/form-data" style="display:none">
                <input type="hidden" name="action" value="upload">
                <input type="hidden" name="filename" value="" id="upload_filename">
                <input type="file" name="file" id="upload_field" accept=".zip">
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
        
        if 'arm_path' in data:
            path = data['arm_path'][0]
            if os.path.isfile(path):
                switch_path = os.path.join('..', '..', 'switch1')
                for filename in os.listdir(switch_path):
                    file_path = os.path.join(switch_path, filename)
                    if os.path.isfile(file_path) or os.path.islink(file_path):
                        os.unlink(file_path)
                    elif os.path.isdir(file_path):
                        distutils.dir_util.remove_tree(file_path)
                distutils.dir_util.copy_tree(path[:-len('/payload.txt')], switch_path)
                open(os.path.join(switch_path, 'armed.txt'), 'w+').write(path)
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/index" /></head></html>'
        elif 'del_payload' in data:
            payload_parts = data['del_payload'][0].split('/')
            payload_path = os.path.join('..', '..', 'library', payload_parts[-3], payload_parts[-2])
            payload_path_parent = os.path.join('..', '..', 'library', payload_parts[-3])
            if os.path.isdir(payload_path):
                distutils.dir_util.remove_tree(payload_path)
                if len(os.listdir(payload_path_parent)) == 0:
                    distutils.dir_util.remove_tree(payload_path_parent)
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/index" /></head></html>'
        elif 'action' in data and data['action'][0] == 'upload':
            filename = data['filename'][0].split('\\')[-1].split('/')[-1]
            directory = os.path.join('..', '..', 'library')
            path = os.path.join('..', '..', 'library', filename)
            open(path, 'w+').write(data['file'][0])
            with zipfile.ZipFile(path, 'r') as zip_ref:
                zip_ref.extractall(directory)
            os.unlink(path)
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/index" /></head></html>'
        
        return '...'
    

    def generatePayloadList(self):
        ret = '<div id="accordion">'

        d = os.path.join('..', '..', 'library')
        categories = [f for f in os.listdir(d)  if os.path.isdir(os.path.join(d, f))]
        i = 0
        for category in categories:
            ret += '''
            <div class="card">
                <div class="card-header" id="heading{0}">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse{0}" aria-expanded="false" aria-controls="collapse{0}">
                        {1}
                        </button>
                    </h5>
                </div>
          
                <div id="collapse{0}" class="collapse{3}" aria-labelledby="heading{0}" data-parent="#accordion">
                    <div class="card-body">
                        {2}
                    </div>
                </div>
            </div>'''.format(i, category.replace('_', ' '), self.generateTable(category), self.containsArmed(category))
            i += 1

        ret += '</div>'
        return ret
    
    def containsArmed(self, category):
        armed_file = os.path.join('..', '..', 'switch1', 'armed.txt')
        d = os.path.join('..', '..', 'library', category)
        payloads = [f for f in os.listdir(d)  if os.path.isdir(os.path.join(d, f))]
        for payload in payloads:
            path = os.path.join(d, payload, 'payload.txt')
            if os.path.isfile(armed_file):
                armed_path = open(armed_file).read()
                if armed_path.strip() == path:
                    return ' show'
        return ''
    
    def generateTable(self, category):
        ret = '''
                        <div class="table-responsive">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Version</th>
                                        <th>Author</th>
                                        <th>Target</th>
                                        <th>Attackmodes</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>'''
        d = os.path.join('..', '..', 'library', category)
        payloads = [f for f in os.listdir(d)  if os.path.isdir(os.path.join(d, f))]
        for payload in payloads:
            path = os.path.join(d, payload, 'payload.txt')
            title = cgi.escape(payload.replace('_', ' ')).encode('ascii', 'xmlcharrefreplace')
            desc = '-'
            version = '-'
            author = '-'
            target = '-'
            attackmodes = '-'
            armed = False
            if os.path.isfile(path):
                payload_cnt = open(path).read()
                title = self.getAttribute('Title', payload_cnt, title)
                desc = self.getAttribute('Description', payload_cnt, desc)
                version = self.getAttribute('Version', payload_cnt, version)
                author = self.getAttribute('Author', payload_cnt, author)
                target = self.getAttribute('Target', payload_cnt, target)
                attackmodes = self.getAttribute('Attackmodes', payload_cnt, attackmodes)
            armed_file = os.path.join('..', '..', 'switch1', 'armed.txt')
            if os.path.isfile(armed_file):
                armed_path = open(armed_file).read()
                armed = armed_path.strip() == path
            if not armed:
                armed = '''<form method="POST">
                            <button type="submit" name="del_payload" value="{0}" class="btn btn-danger btn-sm"><span data-feather="trash-2"></span></button>
                            <button type="submit" name="arm_path" value="{0}" class="btn btn-success btn-sm">Arm</button>
                        </form>'''.format(path)
            else:
                armed = '<button class="btn btn-info btn-sm">Armed</button>'
            ret += '''
                                    <tr>
                                        <td>{0}</td>
                                        <td>{1}</td>
                                        <td>{2}</td>
                                        <td>{3}</td>
                                        <td>{4}</td>
                                        <td>{5}</td>
                                        <td>{6}</td>
                                    </tr>'''.format(title, desc, version, author, target, attackmodes, armed)
        ret += '''
                                </tbody>
                            </table>
                        </div>'''
        return ret
    
    def getAttribute(self, attribute, data, org):
        matches = re.findall('^# {0}: .*$'.format(attribute), data, re.MULTILINE)
        if len(matches) == 0:
            return org
        ret = matches[0].replace('# {0}:'.format(attribute), '').strip()
        return cgi.escape(ret).encode('ascii', 'xmlcharrefreplace')
