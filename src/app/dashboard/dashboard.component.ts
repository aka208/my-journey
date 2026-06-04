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
      description:
        'I have worked on a variety of projects, ranging from small applications to large-scale enterprise solutions. I have experience in both frontend and backend development, and I am always eager to take on new challenges and learn new technologies.',
      config: {
        backgroundColor: '',
      },
    },
    {
      heading: 'Skills',
      description:
        'I have expertise in JavaScript, TypeScript, Angular, React, Node.js, and Python. I am also proficient in database management, version control systems, and agile methodologies.',
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
    {
      heading: 'Hobbies',
      description:
        'In my free time, I enjoy hiking, traveling, and exploring new cuisines. I also have a passion for photography and often spend weekends capturing moments in nature.',
      config: {
        backgroundColor: '',
      },
    },
  ];
}
