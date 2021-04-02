
## Comandos para usar en VIM

- i -> Insertar texto
- gf -> Navegar entre archivos
- gd -> Navegar entre definiciones
- Ctrl + o  -> Vuelvo al archivo anterior
- Ctrl + y -> Vuelvo al siguiente archivo
- / -> Buscar una palabra en el archivo
- w -> Voy a la siguiente palabra
- b -> Voy a la palabra anterior
- :qa! -> Fuerzo la salida del archivo sin guardar
- :q -> Salir del archivo 
- :w -> Guardo el archivo
- :wq -> Guardo y salgo del archivo
- x -> Elimino Caracteres
- dw -> Elimino la palabra completa
- u -> Rehacer el texto un ctrl z
- Ctrl + r -> Redo volver lo que se habia borrado
- d$ -> Eliminar toda una linea
- p -> para pegar la linea
- P -> pegar una linea en la parte superior
- dd -> corta y pega la linea
- r -> comando para remplazar
- cw -> remplazar una palabra
- ciw -> para remplazar toda la palabra
- % -> para saltar entre lineas de parentesis a parentesis o sea una funcion
- 0 -> al principio de la linea
- $ -> al final de la linea
- :s/cadenaquequeremosremplazar/lanuevacadena -> para remplazar
- :s/the/de/g -> remplaze todas las ocurrencias de la linea
- :%s/the/de/gc -> remplaze todas las ocurrencias y va ir preguntando si quiero reemplazar

## Abrir una nueva linea, remplazar y copiar y pegar
- o -> crea una nueva linea y entra en modo insert
- O -> crea una nueva linea arriba de donde esta el curso
- shift r -> modo remplazar
- v -> modo visual de esta forma permite editar, con la Y copia y con la p pega

### Operadores con movimientos
- Se pueden combinar los movimientos con operadores por ejemplos db o con signo de pesos y demas, tambien puedo eliminar mediante los numeros es decir si quiero eliminar donde estoy y quiero eliminar 6 palabras en adelante d numero y w.

### NERDTREE
Para abrir nerd es espacio y nt y con m se puede ver el menu de nerdtree

 
#### Configuration for VIM initial, Don't forget search the vim plugins and install in your machine ;)
set number
set mouse=a
set numberwidth=1
set clipboard=unnamed
syntax enable
set showcmd
set ruler
set encoding=utf-8
set showmatch
set sw=2
set relativenumber
set laststatus=2
set noshowmode
set bg=dark

call plug#begin('~/.vim/plugged')

" Themes
Plug 'morhetz/gruvbox'

" IDE

Plug 'scrooloose/nerdtree'
Plug 'easymotion/vim-easymotion'
Plug 'christoomey/vim-tmux-navigator'
call plug#end()

colorscheme gruvbox
let g:gruvbox_contrast_dark = "hard"
let NERDTreeQuitOnOpen=1

let mapleader=" "
nmap <Leader>s <Plug>(easymotion-s2)
nmap <Leader>nt :NERDTreeFind<CR> 
nmap <Leader>nt :NERDTreeFind<CR> 
nmap <Leader>w :w<CR> 
nmap <Leader>q :q<CR>
