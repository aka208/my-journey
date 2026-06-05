import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  public imagePath = 'assets/images/profile_pic.png';
  public personalDetails = [
    { title: 'Email', value: 'akashbtw@gmail.com' },
    { title: 'Phone', value: '+91-7249364916' },
  ];
  public myDetails = [
    {
      heading: 'About Me',
      description:
        'As an accomplished frontend developer with 8+ years of experience and a strong foundation in Angular and ReactJS, I specialize in crafting dynamic, responsive, and user-centred web applications. With extensive experience in using TailwindCSS, SCSS, CSS3, and HTML5, I deliver high-quality, maintainable, and scalable code. My expertise in JavaScript and Node.js further enables me to build seamless, full-stack applications, while adhering to modern development standards and best practices.',

      config: {
        backgroundColor: '',
      },
    },
    {
      heading: 'Career',
      description: [
        { organization: 'TCS', role: 'System Engineer' },
        { organization: 'Cognizant', role: 'Project Associate' },
        { organization: 'CitiusTech', role: 'Technical Lead' },
        { organization: 'MGSC Inc.', role: 'Technical Lead' },
        { organization: 'Ascendion', role: 'Lead Engineer' },
      ],
      config: {
        backgroundColor: '',
      },
    },
    {
      heading: 'Skills',
      description: [
        { technology: 'Angular', rating: [1, 2, 3, 4, 5] },
        { technology: 'Typescript', rating: [1, 2, 3, 4, 5] },
        { technology: 'JavaScript', rating: [1, 2, 3, 4, 5] },
        { technology: 'NodeJs', rating: [1, 2, 3, 4] },
        { technology: 'RxJs', rating: [1, 2, 3, 4, 5] },
      ],
      config: {
        backgroundColor: '',
      },
    },
    {
      heading: 'Education',
      description:
        'I hold a Bachelor’s degree in Computer Science from XYZ University. During my studies, I focused on software development, algorithms, and data structures, which provided me with a strong foundation for my career in technology.',
      config: {
        backgroundColor: '',
      },
    },
    // {
    //   heading: 'Hobbies',
    //   description:
    //     'In my free time, I enjoy hiking, traveling, and exploring new cuisines. I also have a passion for photography and often spend weekends capturing moments in nature.',
    //   config: {
    //     backgroundColor: '',
    //   },
    // },
  ];
}
