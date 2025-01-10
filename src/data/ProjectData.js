import pinjam from "../assets/img/pinjam.png";
import pinjam11 from "../assets/img/pinjam11.png";
import pinjam12 from "../assets/img/pinjam12.png";
import bps from "../assets/img/bps.png";
import bps11 from "../assets/img/bps11.png";
import bps12 from "../assets/img/bps12.png";
import bps13 from "../assets/img/bps13.png";
import siami from "../assets/img/siami.png";
import siami11 from "../assets/img/siami11.png";
import siami12 from "../assets/img/siami12.png";
import siami13 from "../assets/img/siami13.png";
import siami14 from "../assets/img/siami14.png";
import bc from "../assets/img/bc.png";
import bc11 from "../assets/img/bc11.png";
import bc12 from "../assets/img/bc12.png";
import bc13 from "../assets/img/bc13.png";
import lpg from "../assets/img/lpg.png";
import lpg11 from "../assets/img/lpg11.png";
import lpg12 from "../assets/img/lpg12.png";
import pm from "../assets/img/pm.png";
import pm11 from "../assets/img/pm11.png";
import pm12 from "../assets/img/pm12.png";
import pm13 from "../assets/img/pm13.png";
import pm14 from "../assets/img/pm14.jpg";
import am from "../assets/img/am.png";
import am11 from "../assets/img/am11.png";
import am12 from "../assets/img/am12.png";
import am13 from "../assets/img/am13.png";
export const projects = [
  {
    id: 1,
    title: "Customer LPG Pertamina",
    description: "A website for recording LPG gas buyers at each distribution point.",
    full_description:
      "This website is designed to support the management of LPG distribution points, helping streamline inventory control, including the tracking of stock movements such as incoming and outgoing inventory. It also manages customer transactions by automatically limiting daily and monthly purchase quantities based on customer type. The system ensures data integrity by preventing duplicate customer records across distribution points and facilitates the collection and reporting of data to Pertamina, enhancing operational efficiency and accuracy.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "AJAX"],
    image: lpg,
    full_image: [lpg11, lpg12],
    category: "Web Development",
    year: 2024,
  },
  {
    id: 2,
    title: "Brata Cerdas",
    description: "A website featuring a list of tests provided by Korlantas Polri for tutoring purposes.",
    full_description:
      "Brata Cerdas is an educational platform developed for the Traffic Corps of the Indonesian National Police (Korlantas Polri), aimed at providing a comprehensive learning environment for both prospective and current police officers. The website offers a range of classes conducted by experienced instructors, as well as various types of tests designed to enhance the knowledge and skills of users. It serves as a valuable tool for individuals preparing for police entrance exams or seeking to improve their professional competencies within the police force.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "AJAX", "Google OAuth", "Google Analytics"],
    image: bc,
    full_image: [bc11, bc12, bc13],
    category: "Web Development",
    year: 2024,
  },
  {
    id: 3,
    title: "Asset Management",
    description: "A website for recording employee-borrowed assets.",
    full_description:
      "A website for recording employee-borrowed assets, where administrators can accept or reject borrowing requests. The system maintains a comprehensive history of asset borrowings, assignments, and maintenance activities for various assets, providing an organized record of all transactions. Each borrowing request requires proof of borrowing, ensuring proper documentation, accountability, and traceability. The platform also enables administrators to track asset conditions and manage approval workflows, facilitating efficient asset management within the organization.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "AJAX"],
    image: am,
    full_image: [am11, am12, am13],
    category: "Web Development",
    year: 2024,
  },
  {
    id: 4,
    title: "SIAMI",
    description: "A website to support internal quality audit activities at Politeknik Negeri Jakarta.",
    full_description:
      "SIAMI is a website developed to assist in the implementation of internal quality audits at Politeknik Negeri Jakarta. Previously, audits relied on Excel, which made it difficult to collect and compile final data for audit reports. Auditors, who are also lecturers, had to manually create PDF reports, which was a cumbersome process. Additionally, management lacked a system to monitor the audit process effectively. With SIAMI, data is centralized, and audit information is presented clearly through graphical representations. The system ensures data integrity by preventing unauthorized changes through authentication and secure data protection.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth"],
    image: siami,
    full_image: [siami11, siami12, siami13, siami14],
    category: "Web Development",
    year: 2024,
  },
  {
    id: 5,
    title: "Monitoring DC",
    description: "A website to monitor equipment in the data center of BPS RI.",
    full_description:
      "The Data Center Monitoring System is designed for Statistics Indonesia (BPS RI) to streamline data search, record-keeping, and anomaly detection. This system provides clear data visualization through graphical representations, making data analysis more efficient and user-friendly. Additionally, it is integrated with BPS's Single Sign-On (SSO) login, enabling seamless access for internal employees. The system enhances operational efficiency by centralizing data monitoring and ensuring quick identification and resolution of data anomalies, supporting better decision-making processes.",
    technologies: ["Codeigniter", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth", "SSO"],
    image: bps,
    full_image: [bps11, bps12, bps13],
    category: "Web Development",
    year: 2023,
  },
  {
    id: 6,
    title: "Room Booking System",
    description: "A website for managing room loans in the Accounting Department at PNJ.",
    full_description:
      "This website is a comprehensive room borrowing system developed for the Accounting Department of Politeknik Negeri Jakarta to streamline and effectively manage the room borrowing processes within its academic community. The system includes features such as the ability to export data into PDF format, providing a convenient method for generating reports and documentation. Additionally, it is equipped with an email notification system that automatically informs the department secretary about new room borrowing requests, ensuring efficient communication and coordination.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery"],
    image: pinjam,
    full_image: [pinjam11, pinjam12],
    category: "Web Development",
    year: 2023,
  },
  {
    id: 7,
    title: "Predictive Maintenance",
    description: "Conducted machine maintenance predictions on a dataset consisting of 10,000 rows.",
    full_description:
      "Conducted machine maintenance prediction on a dataset consisting of 10,000 rows using various machine learning methods to determine the most effective approach for predicting machine failures. The goal was to accurately forecast potential breakdowns, enabling proactive maintenance and minimizing downtime by identifying patterns and anomalies in the data.",
    technologies: ["Data Preprocessing", "Data Training", "Undersampled Data", " Optuna Optimization", "SVM", "KNN", "Random Forest", "Roc Curves"],
    image: pm,
    full_image: [pm11, pm12, pm13, pm14],
    category: "Other",
    year: 2023,
  },
];