/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Icomponents {
  title: string
}

class Component <T extends Icomponents> {
  constructor (public props:T) {

  }
}

class Page extends Component <Icomponents> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};