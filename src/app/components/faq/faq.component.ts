import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent { 
   openedFaq: number | null = null;
  faqs = [
    {
      question: 'What is a Knowledge Management System (KMS)?',
      answer: 'A KMS is a platform that helps organizations capture, store, organize, and share knowledge and expertise efficiently.'
    },
    {
      question: 'Who can access the KMS portal?',
      answer: 'Access is typically granted to all employees and stakeholders who need to use or contribute to the organization’s knowledge base.'
    },
    {
      question: 'How do I search for information in the KMS?',
      answer: 'Use the search bar at the top of the portal to find articles, documents, SOPs, and other resources by keywords or categories.'
    },
    {
      question: 'Can I contribute or edit content in the KMS?',
      answer: 'Yes, authorized users can add or update content. Please refer to the user guide or contact your KMS administrator for permissions.'
    },
    {
      question: 'Is the information in the KMS secure?',
      answer: 'Yes, the KMS uses secure authentication and access controls to ensure that only authorized users can view or modify content.'
    },
    {
      question: 'Who do I contact for support or feedback?',
      answer: 'You can reach out to the KM Team via the Contact Us page or email the KMS administrator listed in the portal.'
    }
  ];

  toggleFaq(index: number) {
    this.openedFaq = this.openedFaq === index ? null : index;
  }

}
