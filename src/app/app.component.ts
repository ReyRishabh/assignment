import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apptunix Assignment';
  allBoxes = [
    {
      name: "box 1",
      img: "assets/one.png",
      id: 1
    },
    {
      name: "box 2",
      img: "assets/two.jpeg",
      id: 2
    },
    {
      name: "box 3",
      img: "assets/three.png",
      id: 3
    },
    {
      name: "box 4",
      img: "assets/four.png",
      id: 4
    },
    {
      name: "box 5",
      img: "assets/five.png",
      id: 5
    },
    {
      name: "box 6",
      img: "assets/six.jpg",
      id: 6
    }
  ];
  selectedBox;
  selectBox(box, index) {
    console.log("on delete");
    let array = [];
    array = this.allBoxes.filter(element => {
      return element.img === "";
    });
    if (array.length) {
      for (var i = index - 1; i > 0; i--) {
        if (this.allBoxes[i].img) {
          this.allBoxes[i + 1].img = box.img;
          this.selectedBox = this.allBoxes[i + 1];
          this.allBoxes[index].img = "";
          break;
        }
      }
    } else {
      this.selectedBox = box;
    }
  }
  deleteImage(event, index) {
    this.allBoxes[index].img = "";
    for (var i = index + 1; i < this.allBoxes.length; i++) {
      if (this.allBoxes[i].img) {
        this.allBoxes[i - 1].img = this.allBoxes[i].img;
      }
      this.allBoxes[i].img = "";
    }
    console.log(this.allBoxes, "///");
  }
  onEvent(event) {
    event.stopPropagation();
  }
}
