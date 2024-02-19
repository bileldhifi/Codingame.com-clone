import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path as needed

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'console.log("Hello world!");';

  executionResult: string = '';
  constructor(private apiService: ApiService) {}

 // Method to execute code
  executeUserCode() {
    this.apiService.executeCode(this.code).subscribe({
      next: (response) => {
        console.log(`response: ${JSON.stringify(response)}`);
        this.executionResult = response.output;
        console.log(`zab ${this.executionResult}`);
      },
      error: (error) => {
        console.error(error);
        this.executionResult = `Error: ${error.message}`;
      },
    });
  }
    
}
