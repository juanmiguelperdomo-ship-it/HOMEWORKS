import Node from "./Node"

const menuData = [
  {
    title: 'Corte 1', link: '/corte1',
    children: [
      { title: 'Agenda de Contactos',         link: '/corte1/contactos', component: 'ContactosApp' },
      { title: 'Listas Enlazadas',            link: '/corte1/playlist',  component: 'PlayList'     },
      { title: 'Listas Doblemente Enlazadas', link: '/corte1/historial', component: 'History'      },
    ]
  },
  {
    title: 'Corte 2', link: '/corte2',
    children: [
      { title: 'Queue - ATM',     link: '/corte2/atm',   component: 'QAtm'       },
      { title: 'Stacks - Libros', link: '/corte2/books', component: 'Books'      },
      { title: 'Trees',           link: '/corte2/trees', component: 'BinaryTree' },
    ]
  },
]

function buildTree(items, parentNode) {
  for (const item of items) {
    const node = new Node(item)
    parentNode.addSon(node)
    if (item.children && item.children.length > 0){
      buildTree(item.children, node)
    }
  }
}

const root = new Node({ title: 'root', link: '/' })
buildTree(menuData, root)

export default root