import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-questionnaire',
  templateUrl: './evaluation-questionnaire.component.html',
  styleUrls: ['./evaluation-questionnaire.component.scss']
})
export class EvaluationQuestionnaireComponent implements OnInit {

  q1:any = {
    contenu : "Quel est le nom de l'entreprise",
    noTypeQuestion : 1,
    aide : "HERE AAAAA1"
  }

  q2:any = {
    contenu : "Quel est le nom de l'entreprise",
    noTypeQuestion : 4,
    aide : "HERE BBBBBBBBBBBB1"
  }
  display: any = {
    nomCategorie : " ECONOMICA",
    descriptionCategorie : "Descritpiton",
    questions : [
      this.q1, this.q2
    ]


  } ;
  actualCategorieNumber: number;
  allCategories: any;
  intro: boolean = false;
  red: any ;
  progressBarValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  disableCheckBoxes(question: any, reponse: any) {
    return true;
  }

  previousButtonClick() {

  }

  disableNextButton() {
    return false;
  }

  nextButtonClick() {

  }

  begintEvaluation() {

  }

}
