"use client";
import { React, useState, Fragment}  from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './home.module.css';
import NavBar from "./components/NavBar"
import { useRef } from 'react'; // Import useRef
import { useEffect } from 'react'; // Import useEffect




export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to track form submission
    const [recentName, setRecentName] = useState(''); // State to store the most recent name
  
    useEffect(() => {
      // Fetch the most recent name from the database when the component mounts
      fetch('/api/get-recent-name')
        .then(response => response.json())
        .then(data => setRecentName(data.name));
    }, []);


    const handleSubmit = async (event) => {
      event.preventDefault();
    
      const response = await fetch('/api/add-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

    
      const data = await response.json();

      data.success = true

      if (data.success) {

        setIsFormSubmitted(prevState => !prevState); // Toggle the state
        setName(''); // Clear the name field
        setEmail(''); // Clear the email field
        setMessage(''); // Clear the message field
      }
    };



  
  return (
    <section id="home" className={styles['landing-page']}>
       <NavBar />
      <div className={styles['image-text-container']}>
        <div className={styles['image-container']}>
          <Image src="/chris.JPG" alt="Profile Image" className={styles.image} width={300} height={300} />
        </div>
        <div className={styles['text-container']}>
          <h1>Software Developer 👋</h1>
          <p id="title">Hi, I'm Chris Solorzano. A passionate computer science graduate based in San Francisco, California 📍</p>
          <div className={styles['icon-container']}>
            <a href="https://www.linkedin.com/in/chris-solorzano/">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://github.com/">
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles['tech-stack-container']}>
        <h2 className={styles['tech-stack-wording']}>Tech Stack</h2>
        <div className={styles['tech-stack-line']}></div>
        <div className={styles['tech-stack-icons']}>
          <FaHtml5 className={styles['tech-icon']} />
          <FaCss3 className={styles['tech-icon']} />
          <FaJs className={styles['tech-icon']} />
          <FaReact className={styles['tech-icon']} />
          <FaJava className={styles['tech-icon']} />
          <FaPython className={styles['tech-icon']} />
        </div>
      </div>
      <div id="about" className={styles['about-container']}>
        <div className={styles['image-box']}>
          <Image src="/about.jpeg" alt="About Image" className={styles['about-image']} width={400} height={300} />
        </div>
        <div className={styles['text-box']}>
          <h2 className={styles['about-title']}>About Me</h2>
          <h3 className={styles['about-subtitle']}>A dedicated and passionate computer science graduate based in San Francisco, California 📍</h3>
          <p className={styles['about-paragraph']}>
          As an accomplished computer science graduate, I possess a diverse skill set in both front-end and back-end development. My expertise includes proficiency in HTML, CSS, JavaScript, React, Java, C++, MongoDB, and more. With a passion for designing visually appealing websites, my focus lies in creating and maintaining responsive platforms that offer seamless user experiences. Beyond my technical abilities, I am a highly collaborative team player, thriving in environments that encourage cross-functional cooperation. By combining my technical acumen with my strong interpersonal skills, I am committed to delivering exceptional results and contributing to the success of any project.
          </p>
        </div>
      </div>
      <section id="portfolio" className={styles.section}>
        <div className={styles['portfolio-container']}>
          <div className={styles['portfolio-title']}>
            <h2>Portfolio</h2>
            <p>Check out some of my projects</p>
          </div>
          <div className={styles['projects-container']}>
            <div className={styles.project}>
              <h3>Expense Tracker</h3>
              <div className={styles['project-description']}>
                <p>A comprehensive full-stack application that efficiently captures user data to calculate monthly budgets.</p>
              </div>
              <div className={styles['project-image']}>
                <Image src="/expense.png" alt="Expense Image" className={styles['expense-image']} width={300} height={200} />
              </div>
              <div className={styles['project-buttons']}>
                <div className={styles['button-row']}>
                  <button>React</button>
                  <button>Next.js</button>
                  <button>Prisma</button>
                </div>
                <div className={styles['button-row']}>
                  <button>PostgresSQL</button>
                  <button>Javascript</button>
                </div>
              </div>
              <div className={styles['project-actions']}>
                <a href="https://github.com/chrisxsolo/expensetracker" target="_blank" className={styles['project-action-link']}>
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://expensetracker-kohl-gamma.vercel.app/" target="_blank" className={styles['project-action-link']}>
                  Live Demo
                </a>
              </div>
            </div>
            <div className={styles.project}>
              <h3>Photography Blog</h3>
              <div className={styles['project-description']}>
                <p>A fullstack and dynamic website showcasing my thoughts about my freelance photography sessions.</p>
              </div>
              <div className={styles['project-image']}>
                <Image src="/blog.png" alt="Blog Image" className={styles['blog-image']} width={300} height={200} />
              </div>
              <div className={styles['project-buttons']}>
                <div className={styles['button-row']}>
                  <button>React</button>
                  <button>Next.js</button>
                  <button>Prisma</button>
                </div>
                <div className={styles['button-row']}>
                  <button>PostgresSQL</button>
                  <button>Javascript</button>
                </div>
              </div>
              <div className={styles['project-actions']}>
                <a href="https://github.com/chrisxsolo/blog" target="_blank" className={styles['project-action-link']}>
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://blog-six-psi-28.vercel.app/" target="_blank" className={styles['project-action-link']}>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={styles["contact"]}>
      <div className={styles['contact-container']}>
    <div className={styles['contact-title']}>
      <h2>Contact Me</h2>
      <p>Feel free to get in touch</p>
    </div>
    <div className={styles['contact-form']}>

    <div className={styles['success-message-container']}>
      {isFormSubmitted ? (
 <Fragment>
 <p className={styles['success-message']}>Message sent successfully from {recentName}!</p>
 <div className={styles['success-message-space']}></div> {/* Add this line */}
</Fragment>
)

 : (
        // Add a key to your form that changes when the form is submitted
<form key={isFormSubmitted} onSubmit={handleSubmit}>
        <div className={styles['form-row']}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles['form-row']}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles['form-row']}>
          <textarea
            placeholder="Message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={styles['form-row']}>
          <button type="submit" className={styles['submit-button']}>
            Submit Message
          </button>
        </div>
      </form>
      )}
      </div>
    </div>
  </div>
    </section>
      </section>
  );
}

