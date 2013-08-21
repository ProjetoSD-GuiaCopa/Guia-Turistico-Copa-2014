import riak


myClient = riak.RiakClient(pb_port=8087, protocol='pbc')

USER = myClient.bucket('USER')
CIDADE = myClient.bucket('CIDADE')
LOCAL = myClient.bucket('LOCAL')
JOGO = myClient.bucket('JOGO')


'''
Insercoes
'''

def create_user(nome, senha, email, permissao):
	if not USER.get(email).exists:
		user={'nome':nome,'senha':senha,'email': email,'permissao':permissao}
		insert = USER.new(user['email'],data=user)
		insert.store()
	#else:
		#TODO: Joga uma excecao para avisar que ja existe esse usuario

def create_cidade(nome, latitude, longitude, descricao):
	if not CIDADE.get(nome).exists:
		cidade={'nome':nome,'latitude':latitude,'longitude': longitude,'descricao':descricao}
		insert = CIDADE.new(cidade['nome'],data=cidade)
		insert.store()
	#else:
		#TODO: Joga uma excecao para avisar que ja existe esse usuario

def create_local(nome, endereco, foto, descricao,cidade_nome):
	if not LOCAL.get(endereco).exists and cidade_nome :
		cidade = CIDADE.get(cidade_nome)
		#Pensar aqui como vai ser a chave de busca
		local={'nome':nome,'endereco':endereco,'foto': foto,'descricao':descricao}
		insert = LOCAL.new(local['endereco'],data=local)
		insert.store()
		cidade.add_link(insert)
		cidade.store()
	#else:
		#TODO: Joga uma excecao para avisar que ja existe esse usuario

def create_jogo(time1, time2, horario,data, descricao,cidade_nome,local_endereco):
	if not JOGO.get(???).exists and cidade_nome and local_endereco:
		cidade = CIDADE.get(cidade_nome)
		local = LOCAL.get(local_endereco)
		jogo={'time1':time1,'time2':time2,'horario': horario,'data':data,'descricao':descricao}
		#Pensar aqui como vai ser a chave de busca
		insert = JOGO.new(jogo['?????'],data=jogo)
		insert.store()

		cidade.add_link(insert)
		cidade.store()

		local.add_link(insert)
		local.store()
	#else:
		#TODO: Joga uma excecao para avisar que ja existe esse usuario
'''
FIM Insercoes
'''






'''
Consultas Simples
'''

def get_user(user_email):
	if USER.get(email).exists:
		return USER.get(email).data
	else:
		return None

def get_cidade(cidade_nome):
	if CIDADE.get(cidade_nome).exists:
		return CIDADE.get(cidade_nome).data
	else:
		return None

def get_local(local_endereco):
	if LOCAL.get(local_endereco).exists:
		return LOCAL.get(local_endereco).data
	else:
		return None

def get_jogo(????):
	if JOGO.get(????).exists:
		return JOGO.get(????).data
	else:
		return None


'''
FIM Consultas Simples
'''




'''
Parte de deletar os objetos
'''

def delete_user(user_email):
	if USER.get(email).exists:
		user = USER.get(email)
		user.delete()
	#else:
		#TODO: fazer excecao pra nao existe
'''#TODO: complicado, pensar em cascata ou impedir de deletar
def delete_cidade(cidade_nome):
	if CIDADE.get(cidade_nome).exists:
		cidade = CIDADE.get(cidade_nome)
		cidade.delete()
	#else:
		#TODO: fazer excecao pra nao existe

def delete_local(local_endereco):
	if LOCAL.get(local_endereco).exists:
		local = LOCAL.get(local_endereco)
		local.delete()
	#else:
		#TODO: fazer excecao pra nao existe

def delete_jogo(????):
	if LOCAL.get(????).exists:
		jogo = jogo.get(????)
		jogo.delete()
	#else:
		#TODO: fazer excecao pra nao existe
'''
'''
Fim deletes
'''

'''
UPDATES
'''





'''
Buscas complexas
'''

def get_cidade_and_locais(cidade_nome):
    cidade = cidade.get(cidade_nome)
    locais = []

    # They come out in the order you added them, so there's no
    # sorting to be done.
    for local_link in cidade.get_links():
        # Gets the related object, then the data out of it's value.
        locais.append(local_link.get().get_data())

    return {
        'cidade': cidade.get_data(),
        'locais': locais,
    }

'''
FIM Buscas complexas
'''


'''
create_cidade("nome", "latitude", "longitude", "descricao")
create_local("nome2", "endereco", "foto", "descricao","nome")
cidade = CIDADE.get('nome')
local =LOCAL.get('endereco')
print local.data,cidade.data
local.delete()
cidade.delete()
'''