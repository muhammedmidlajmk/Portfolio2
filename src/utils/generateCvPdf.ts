import { jsPDF } from 'jspdf';

export function downloadCvPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;

  let y = 40;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = 40;
    }
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(26);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 24, 33);
    doc.text(title, margin, y);
    y += 4;
    doc.setDrawColor(180, 190, 205);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
  };

  // HEADER (Center aligned)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(24, 32, 47);
  doc.text('MUHAMMED MIDLAJ MK', pageWidth / 2, y, { align: 'center' });
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(40, 50, 70);
  doc.text('Oracle SQL Developer | Database Engineer | .NET Core MVC Developer', pageWidth / 2, y, { align: 'center' });
  y += 13;

  doc.setFontSize(8.5);
  doc.setTextColor(70, 80, 95);
  doc.text('Hawally Block-1, Kuwait  |  +965 66907621  |  midlajmuhammed443@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 11;
  doc.text('linkedin.com/in/muhammed-midlaj-584820294  |  github.com/muhammedmidlajmk', pageWidth / 2, y, { align: 'center' });
  y += 6;

  // PROFESSIONAL SUMMARY
  drawSectionHeader('PROFESSIONAL SUMMARY');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 55, 72);
  const summaryText =
    'Oracle SQL Developer, Database Engineer, and .NET Core MVC Developer with 2+ years of hands-on experience designing, developing, optimizing, and maintaining Oracle-based database systems and ASP.NET Core MVC applications for enterprise-level retail solutions. Skilled in PL/SQL development, performance tuning, and reporting, with a track record of building automated solutions for data-driven business processes and integrating backend logic with front-end portals and ERP systems. Currently expanding academic foundation through a Bachelor\'s degree in Computer Applications to complement hands-on industry experience.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11.5 + 2;

  // SKILLS
  drawSectionHeader('SKILLS');
  const skillsList = [
    { label: 'Programming Languages:', val: 'C#, Python, C, Java, JavaScript' },
    { label: 'Database Management:', val: 'Oracle SQL, PL/SQL, Microsoft SQL Server' },
    { label: 'Frameworks:', val: 'ASP.NET Core MVC, ASP.NET Core, REST API' },
    { label: 'Web Technologies:', val: 'HTML, CSS, Bootstrap, jQuery, AJAX' },
    { label: 'Tools:', val: 'Visual Studio, Visual Studio Code, Oracle SQL Developer, Oracle Toad' },
  ];

  skillsList.forEach((skill) => {
    checkPageBreak(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(skill.label, margin, y);
    const labelWidth = doc.getTextWidth(skill.label) + 5;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textLines = doc.splitTextToSize(skill.val, contentWidth - labelWidth);
    doc.text(textLines, margin + labelWidth, y);
    y += Math.max(1, textLines.length) * 11.5;
  });

  // PROFESSIONAL EXPERIENCE
  drawSectionHeader('PROFESSIONAL EXPERIENCE');

  // Company line
  checkPageBreak(24);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(20, 30, 45);
  doc.text('Regency Group For Corporate Management (Grand Hyper Market) - Kuwait', margin, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 55, 72);
  doc.text('Jun 2023 - Present', pageWidth - margin, y, { align: 'right' });
  y += 12;

  // Role line
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(60, 70, 85);
  doc.text('Software Developer | .NET Core MVC Developer | Software Administrator', margin, y);
  y += 12;

  const experienceSections = [
    {
      subtitle: 'Oracle SQL & PL/SQL Development',
      bullets: [
        'Created complex stored procedures, functions, packages, and triggers in PL/SQL to handle backend business logic for retail operations and ERP workflows.',
        'Developed and fine-tuned high-performance SQL queries for real-time dashboards and reporting systems.',
        'Implemented data validation, transformation, and integrity checks for transaction tables with millions of records.',
      ],
    },
    {
      subtitle: '.NET Core MVC Development',
      bullets: [
        'Developed and maintained web applications using ASP.NET Core MVC, implementing backend logic, controllers, and views for internal business portals.',
        'Integrated ASP.NET Core MVC applications with Oracle databases to deliver end-to-end retail and ERP solutions.',
        'Built REST APIs to connect front-end portals with backend PL/SQL services and business logic.',
      ],
    },
    {
      subtitle: 'Data Integration & Automation',
      bullets: [
        'Created automated PL/SQL jobs to process inventory data, generate auto purchase orders, and monitor low stock levels.',
        'Built scheduled backup scripts and recovery plans using Oracle RMAN, ensuring business continuity through proper archival strategies.',
        'Developed custom reports and dashboards for management, providing detailed insights into sales trends, inventory levels, and customer behavior.',
        'Collaborated with cross-functional teams to gather reporting requirements and design database solutions that met business needs and improved overall efficiency.',
      ],
    },
    {
      subtitle: 'Reporting & Business Intelligence',
      bullets: [
        'Developed custom SQL reports for sales, inventory, and employee performance analysis.',
        'Built dynamic views and materialized views for reporting using Oracle SQL Developer with Excel pivot integration.',
      ],
    },
  ];

  experienceSections.forEach((sec) => {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(sec.subtitle, margin, y);
    y += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);

    sec.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 14);
      checkPageBreak(bulletLines.length * 10 + 3);
      doc.text('•', margin + 3, y);
      doc.text(bulletLines, margin + 11, y);
      y += bulletLines.length * 10 + 2;
    });
    y += 2;
  });

  // PROJECTS
  drawSectionHeader('PROJECTS');

  const projects = [
    {
      name: 'Auto Ordering Algorithm in PL/SQL (Auto PO)',
      bullets: [
        'Created an automated product ordering algorithm using PL/SQL to optimize inventory management for retail stores.',
        'Algorithm automatically generates purchase orders based on sales data, stock levels, and predefined thresholds, reducing manual intervention and stockouts.',
        'Integrated the solution with the inventory management system, ensuring accurate and timely reordering of products.',
      ],
    },
    {
      name: 'Customer Loyalty Program',
      bullets: [
        'Designed backend logic for customer point redemption and voucher issuance using PL/SQL procedures.',
        'Ensured the backend system handled real-time point deductions and voucher validations, maintaining data accuracy.',
      ],
    },
    {
      name: 'iVision Blog (Web Application) - Database Design & Integration',
      bullets: [
        'Designed and implemented a relational database structure in Oracle SQL for a centralized blog management system for smooth retail operations.',
        'Developed tables, relationships, and constraints to manage users, posts, categories, tags, and comments efficiently.',
        'Collaborated with front-end developers to integrate the blog module into the iVision ASP.NET Core MVC application.',
      ],
    },
  ];

  projects.forEach((proj) => {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(proj.name, margin, y);
    y += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);

    proj.bullets.forEach((b) => {
      const bLines = doc.splitTextToSize(b, contentWidth - 14);
      checkPageBreak(bLines.length * 10 + 2);
      doc.text('•', margin + 3, y);
      doc.text(bLines, margin + 11, y);
      y += bLines.length * 10 + 2;
    });
    y += 3;
  });

  // EDUCATION
  drawSectionHeader('EDUCATION');

  const eduItems = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      meta: 'Expected Completion: March 2027',
      institution: 'KL University (Online) - Final Semester',
    },
    {
      degree: 'Diploma in Computer Engineering (3-Year)',
      meta: 'Feb 2023 | CGPA: 8.1',
      institution: 'SSM Polytechnic College, Tirur, Kerala - Department of Technical Education, Kerala, India',
    },
    {
      degree: 'Higher Secondary Education - Science',
      meta: '2020 | 85.2%',
      institution: 'Department of General and Higher Education, Kerala, India',
    },
  ];

  eduItems.forEach((edu) => {
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(45, 55, 72);
    doc.text(edu.meta, pageWidth - margin, y, { align: 'right' });
    y += 10;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(edu.institution, margin, y);
    y += 12;
  });

  // PERSONAL DETAILS
  drawSectionHeader('PERSONAL DETAILS');
  checkPageBreak(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(30, 41, 59);
  doc.text('Date of Birth:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('10 February 2002', margin + 65, y);
  y += 11;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text('Nationality:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Indian', margin + 65, y);

  // Save the document
  doc.save('MUHAMMED_MIDLAJ_MK_CV.pdf');
}
