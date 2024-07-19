import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [CommonModule, FormsModule, PdfViewerComponent, FooterComponent, HeaderLoginComponent],
  templateUrl: './educate.component.html',
  styleUrls: ['./educate.component.css']
})
export class EducateComponent {
  documents = [
    { title: 'Finance Bill 2024', file: 'assets/documents/finance-bill-2024.pdf' },
    { title: 'Constitution of Kenya', file: 'assets/documents/constitution-of-kenya.pdf' },
    
  ];
  
  selectedDocument: any = null;
  chatHistory = [
    { date: 'Today', message: 'Explain the taxing in the finance bill 2024' },
    { date: 'Yesterday', message: 'What does this bill say' },
  ];
  newMessage = '';

  selectDocument(doc: any) {
    this.selectedDocument = doc;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatHistory.push({ date: 'Now', message: this.newMessage });
      this.newMessage = '';
    }
  }
}
