import os, os.path, re, cgi, hashlib


class users:

    def GET(self, handler):

        ret = open('templates/main.tpl').read()
        ret = ret.replace('{{ title }}', 'Users').replace('{{ content }}', self.generateUserList())
        ret = ret.replace('{{ buttons }}', '''
              <form method="POST">
                <input type="hidden" name="action" value="add_user">
                <input type="text" name="user" placeholder="Username">
                <input type="password" name="pass" placeholder="Password">
                <button class="btn btn-sm btn-outline-secondary" type="submit">
                    <span data-feather="user-plus"></span> Add
                </button>
              </form>
              ''')
        ret = ret.replace('{{ javascript }}', '''$("table").each(function(i, table) { $(table).DataTable() });''')
        return ret
    

    def POST(self, data, handler):
        
        if 'del_user' in data:
            credentials_path = os.path.join('credentials')
            logins = open(credentials_path, 'r+').readlines()
            credentials = []
            for login in logins:
                if len(login.strip()) > 0 and login.split(':')[0] != data['del_user'][0]:
                    credentials.append(login)
            f = open(credentials_path, 'w+')
            for credential in credentials:
                f.write(credential)
            f.close()
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/users" /></head></html>'
        elif 'action' in data and data['action'][0] == 'add_user':
            username = data['user'][0]
            password = data['pass'][0]
            credentials_path = os.path.join('credentials')
            logins = open(credentials_path, 'r+').readlines()
            credentials = []
            sha512 = hashlib.sha512()
            sha512.update('{0}:{1}'.format(username, password))
            login_hash = sha512.hexdigest().lower()
            credentials.append('{0}:{1}\n'.format(username, login_hash))
            for login in logins:
                if len(login.strip()) > 0 and login.split(':')[0] != username:
                    credentials.append(login)
            os.unlink(credentials_path)
            f = open(credentials_path, 'w+')
            for credential in credentials:
                f.write(credential)
            f.close()
            return '<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/users" /></head></html>'
        
        return '...'

    
    def generateUserList(self):

        ret = '''
                        <div class="table-responsive">
                            <table id="lang_table" class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>'''
        credentials_path = os.path.join('credentials')
        if not os.path.isfile(credentials_path):
            open(credentials_path, 'w+').close()
        for login in open(credentials_path, 'r+').readlines():
            user = login.split(':')[0]
            ret += '''
                                    <tr>
                                        <td>{0}</td>
                                        <td style="float:right">
                                            <form method="POST">
                                                <button type="submit" name="del_user" value="{0}" class="btn btn-danger btn-sm"><span data-feather="trash-2"></span></button>
                                            </form>
                                        </td>
                                    </tr>'''.format(cgi.escape(user).encode('ascii', 'xmlcharrefreplace'))

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
