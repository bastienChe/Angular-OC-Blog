import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  postListItems = [
    {
      title:"Les différents types de lampadaires extérieurs",
      content:"Le  lampadaire extérieur appelé aussi généralement « réverbère » est un système d’éclairage qu’on installe en dehors du foyer. Sa première utilisation datait de la fin du XVIIIe siècle et servait à cette époque à éclairer les voies de circulations publiques notamment dans les périphéries(voir ici). On les trouve aussi souvent dans les zones urbaines.",
      loveIts:3,
      created_at:new Date(2017, 11, 18)
    },
    {
      title:"Lampadaire extérieur : les formes disponibles",
      content:"Il existe plusieurs modèles de lampadaire extérieur dont celui en réverbère qui est un traditionnel des luminaires extérieurs. Il se distingue par sa forme et la présence de 2 ou 3 lanternes. Souvent, ce modèle comprend un abat-jour. Rustique et élégant, il fait souvent penser à une ambiance de campagne ou à une décoration de château. Pour ceux qui préfèrent les modèles classiques, le lampadaire tubulaire  est un modèle à la fois discret et classe.",
      loveIts:1,
      created_at:new Date(2017, 10, 20)
    },
    {
      title:"Quel lampadaire choisir ?",
      content:"Choisir le design de votre lampadaire est un choix non négligeable car il doit à la fois proposer une bonne luminosité tout en restant esthétique. Pour offrir la luminosité parfaite à votre extérieur, il faut savoir quelle est l’intensité de lumière que le lampadaire rendra. Pour illuminer une allée, vous pourrez choisir une ampoule à incandescence. Un lampadaire avec une ampoule halogène offrira une luminosité homogène et instantanée qui conviendra à votre jardin, terrasse ou autres espaces extérieures spacieux.",
      loveIts:0,
      created_at:new Date(2017, 5, 12)
    },
    {
      title:'La robustesse ?',
      content:"La robustesse est un point à ne pas négliger. En termes de prix, sachez que beaucoup de marques proposent aujourd’hui un large choix de lampadaire extérieur pour tous les budgets. Que vous disposez donc d’un petit budget ou d’une somme importante, vous pouvez acquérir un lampadaire extérieur de qualité avec une possibilité de choisir le style pour donner un nouvel air à votre jardin, terrasse ou allée.",
      loveIts:-4,
      created_at:new Date(2017, 2, 27)
    }
  ];

}
