import React from "react";

export class Question {
  constructor(id, name, tag, companies, level) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.companies = companies;
    this.level = level;
  }
}
