import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillSets = [
    {
      name: "HTML5",
      logoUrl: "assets/images/html5.png"
    },
    {
      name: "CSS3",
      logoUrl: "assets/images/css3.svg"
    }, {
      name: "Javascript",
      logoUrl: "assets/images/js.svg"
    }, {
      name: "Angular 2+",
      logoUrl: "assets/images/angular.svg"
    }, {
      name: "JQuery",
      logoUrl: "assets/images/jquery.png"
    },
    {
      name: "MySQL",
      logoUrl: "assets/images/mysql.svg"
    },
    {
      name: "MongoDB",
      logoUrl: "assets/images/mongodb.png"
    },
    {
      name: "Node JS",
      logoUrl: "assets/images/nodejs.jpg"
    },
    {
      name: "Express JS",
      logoUrl: "assets/images/express.png"
    },
    {
      name: "GIT",
      logoUrl: "assets/images/git.png"
    },
    {
      name: "C# .NET Web API",
      logoUrl: "assets/images/net.jpg"
    },
    {
      name: "Google Cloud platform",
      logoUrl: "assets/images/gcp.png"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
