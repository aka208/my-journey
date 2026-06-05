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
      description: [
        {
          title: 'Experience',
          value:
            'As an accomplished frontend developer with 8+ years of experience and a strong foundation in Angular and Node',
        },
        {
          title: 'Tech Stack',
          value:
            'Angular (12/16/17/18/19), JavaScript, NodeJs, TypeScript, RxJs, ReactJs, TailwindCSS, SCSS, CSS3, and HTML5',
        },
        {
          title: 'Development & Management Tools',
          value:
            'Visual Studio Code, IntelliJ, Tortoise SVN, GitHub, JIRA, SonarQube, Lightspeed Harness',
        },
        {
          title: 'Domains worked',
          value:
            'Internet of Things, Banking and Financial domain, Embeded system domain',
        },
      ],

      config: {
        backgroundColor: '',
      },
    },
    {
      heading: 'Career',
      description: [
        {
          organization: 'Ascendion',
          role: 'Lead Engineer',
          details: [
            { title: 'Serving Period', value: 'September 2024 - present' },
            { title: 'Project', value: 'EDGE (Citi Bank)' },
            {
              title: 'Roles & Responsibilities',
              value: [
                'Worked on different modules.',
                'Build modules for key extraction from scratch and delivered for release.',
                'Implemented code optimization techniques.',
                'Worked on UAT and prod issue fixed.',
                'Developed and optimized template structure.',
              ],
            },
          ],
        },

        {
          organization: 'MGSC Inc.',
          role: 'Technical Lead',
          details: [
            { title: 'Serving Period', value: 'Aug 2023 - Sep 2024' },
            { title: 'Project', value: 'Autonomous Systemsl' },
            {
              title: 'Roles & Responsibilities',
              value: [
                'Created Architecture for various modules according to client requirement.',
                'Developed the screens according to requirement provided in the story or modified the present screen',
                'Created UI services to interact with backend RESTful endpoints.',
                'Created shared component from scratch which is used across the module.',
                'Helped team members to resolve query related to tasks or user stories and on boarding of resources by providing detailed knowledge transfer.',
              ],
            },
          ],
        },
        {
          organization: 'CitiusTech',
          role: 'Technical Lead',
          details: [
            { title: 'Serving Period', value: 'Aug 2021 - Jun 2023' },
            { title: 'Project', value: '' },
            {
              title: 'Roles & Responsibilities',
              value: [
                'Developed the screens according to requirement provided in the story or modified the present screen',
                'Created UI services to interact with backend RESTful endpoints.',
                'Created shared component from scratch which is used across the module.',
                'Created demo for Micro Frontends aby implementing it in Angular10.',
                'Helped team members to resolve query related to tasks or user stories and onboarding of resources by providingdetailed knowledge transfer.',
              ],
            },
          ],
        },
        {
          organization: 'Cognizant',
          role: 'Project Associate',
          details: [
            { title: 'Serving Period', value: 'Nov 2020 - Aug 2021' },
            { title: 'Project', value: 'Monitoring and Testing Tool' },
            {
              title: 'Roles & Responsibilities',
              value: [
                'Developed the screens according to requirement provided in the story or modified the present screen ',
                'Worked on Chart JS to bring the virtual dynamic data analysis',
                'Created UI services and RESTful Web APIs to interact with backend URL provided',
                ' Created the dashboard according to requirement and parameter monitoring needs',
                'Used different NPM modules and libraries to make interactive screens and worked with RxJS libraries such as Observables and ForkJoin',
                'Worked with the team members and helped other team members to resolve UI issues and problem faced by them in writing UI code',
              ],
            },
          ],
        },

        {
          organization: 'TCS',
          role: 'System Engineer',
          details: [
            { title: 'Serving Period', value: 'Sep 2016 - Oct 2020' },
            { title: 'Project', value: 'Connected Visual Asset Tool (CVAT)' },
            {
              title: 'Roles & Responsibilities',
              value: [
                'Developed the screens according to requirement provided in the story or modified the present screen',
                'Worked on Chart JS to bring the virtual dynamic data analysis',
                'Created UI services and RESTful Web APIs to interact with backend URL provided',
                'Created the dashboard according to requirement and parameter monitoring needs',
                'Used different NPM modules and libraries to make interactive screens and worked with RxJS libraries such as Observables and ForkJoin',
              ],
            },
          ],
        },
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
      description: [
        { degree: 'B Tech', 'percentage/cgpa': '7.99' },
        { degree: 'XII', 'percentage/cgpa': '63.33%' },
        { degree: 'X', 'percentage/cgpa': '78%' },
      ],
      config: {
        backgroundColor: '',
      },
    },
  ];
}
