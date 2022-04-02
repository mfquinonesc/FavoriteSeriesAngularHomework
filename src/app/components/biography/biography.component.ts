import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  
  series: any = [];

  constructor() {
    this.series = [
      { 
        name: "Arcane: League of Legends (Serie de TV)",
        subtitle: "Serie de TV (2021-) 9 episodios",
        image: "../../assets/img/arcane.jpg",
        image_alt: "Arcane(2021)",
        description: `Arcane' ahonda en el precario equilibrio entre la rica ciudad de Piltover y la sórdida y oprimida Zaun. La tensión entre ambas ciudades-estado se exacerba, por un lado, debido a la creación en Piltover de algo llamado "Hextech", que permite a cualquiera controlar la energía mágica, y, por otro, de una nueva droga en Zaun llamada "Shimmer", que transforma a los humanos en monstruos. La rivalidad entre las dos ciudades divide a las familias y los amigos. 'Arcane' da vida a las relaciones que moldean a algunos de los famosos campeones de ‘League of Legends’, como Vi, Jinx, Caitlyn, Jayce y Vikto.`
      },

      { 
        name: "Kimetsu no Yaiba (Serie de TV)",
        subtitle: "Serie de TV (2019). 26 episodios.",
        image: "../../assets/img/kimetsu.jpg",
        image_alt: "Kimetsu no Yaiba(2019)",
        description: `Serie de TV (2019). 26 episodios. Tanjirou Kamado es un chico inteligente y de buen corazón que vive con su familia y gana dinero vendiendo carbón. Todo cambia cuando su familia es atacada y asesinada por un demonio (oni). Tanjirou y su hermana Nezuko son los únicos sobrevivientes del incidente, aunque Nezuko fue convertida en demonio. Tanjirou se convierte en un asesino de demonios para ayudar a su hermana a volverse humana nuevamente y vengar la muerte de su familia.`
      },

      { 
        name: "Invencible (Serie de TV)",       
        image: "../../assets/img/invincible.jpg",
        image_alt: "Invincible(2021)",
        description: `Cuando Mark Grayson hereda superpoderes con 17 años, se convierte en uno de los superhéroes más grandes de la Tierra, junto con su padre. Todos sus sueños anhelados desde que era niño se hacen realidad... hasta que sucede algo que lo cambia todo.`
      },

      { 
        name: "El juego del calamar (Serie de TV)",
        subtitle: "Serie de TV (2021-). 9 episodios.",
        image: "../../assets/img/calamar.jpg",
        image_alt: "El juego del calamar (2021)",
        description: `Cientos de jugadores con problemas económicos aceptan una extraña invitación para competir en juegos infantiles. Dentro les esperan un premio tentador y desafíos letales.`
      },

      { 
        name: "WandaVision (Miniserie de TV)",
        subtitle: "Miniserie de TV (2021). 9 episodios.",
        image: "../../assets/img/wandavision.jpg",
        image_alt: "WandaVision (2021)",
        description: `Combinando el estilo clásico de las sitcoms con el MCU (Universo Cinematográfico de Marvel), cuenta la historia Wanda Maximoff y Vision, dos seres con superpoderes que viven una vida idílica en las afueras de una ciudad hasta que un día comienzan a sospechar que no todo es lo que parece. (FILMAFFINITY)`
      },
     
      { 
        name: "Mare of Easttown (Miniserie de TV)",
        subtitle: "Serie de TV (2021). 7 episodios",
        image: "../../assets/img/mare.jpg",
        image_alt: "Mare of Easttown (2021)",
        description: `Mare Sheehan (​Kate Winslet) es una detective de un pequeño pueblo de Pennsylvania que investiga un asesinato local mientras intenta que su vida personal no se desmorone. (FILMAFFINITY)`
      }
    ];
   }

  ngOnInit(): void {
  }

}
