import idGenerator from "../utils/idGenerator.js";

const booksAvailable = [
  {
    name: 'Production-Ready Microservices', author: 'Susan J. Fowler', price: '$32', imageSrc: '/images/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg', id: idGenerator.next().value, pages: 259, language: 'English', publisher: "O'Reilly Media", publicationDate: 'November 30, 2016', readingAge: 18, rating: 4.8, description: `

    <strong>Who This Book Is Written For?</strong>
    <br>
    <br>
    This book is primarily written for software engineers and site reliability engineers who have either split a monolith and are wondering “what’s next?”, or who are building microservices from the ground up and want to design stable, reliable, scalable, fault-tolerant, performant microservices from the get-go.
    
    However, the relevance of the principles within this book is not limited to the primary audience. Many of the principles, from good monitoring to successfully scaling an application, can be applied to improve services and applications of any size and architecture at any organization. Engineers, engineering managers, product managers, and high-level company executives may find this book useful for a variety of reasons, including determining standards for their application(s), understanding changes in organizational structure that result from architecture decisions, or for determining and driving the architectural and operational vision of their engineering organization(s).
    
    I do assume that the reader is familiar with the basic concepts of microservices, with microservice architecture, and with the fundamentals of modern distributed systems —readers who understand these concepts well will gain the most from this book. For readers unfamiliar with these topics, I’ve dedicated the first chapter to a short overview of microservice architecture, the microservice ecosystem, organizational challenges that accompany microservices, and the nitty-gritty reality of breaking a monolithic application into microservices.
    ` },
  {
    name: 'Release It!', author: 'Michael T. Nygard', price: '$45', imageSrc: '/images/414CRjLjwgL._SX403_BO1,204,203,200_.jpg', id: idGenerator.next().value, pages: 350, language: 'English', publisher: 'Pragmatic Bookshelf', publicationDate: 'July 12, 2017', readingAge: 18, rating: 3.5, description: `
  Whether it's in Java, .NET, or Ruby on Rails, getting your application ready to ship is only half the battle. Did you design your system to survivef a sudden rush of visitors from Digg or Slashdot? Or an influx of real world customers from 100 different countries? Are you ready for a world filled with flakey networks, tangled databases, and impatient users? If you're a developer and don't want to be on call for 3AM for the rest of your life, this book will help. In Release It!, Michael T. Nygard shows you how to design and architect your application for the harsh realities it will face. You'll learn how to design your application for maximum uptime, performance, and return on investment. Mike explains that many problems with systems today start with the design. 
  
  ` },
  {
    name: 'React-and-React-Native---Third-Edition', author: 'Adam Boduch , Roy Derks ', price: "$5", imageSrc: '/images/react_and_reactNative.png', id: idGenerator.next().value, pages: 320, language: 'English', publisher: 'Lumina', publicationDate: 'September 4, 2012', readingAge: 18, rating: 2.4, description: `
  
  <strong>Key Features</strong>
  <br><br>
    Covers the latest features of React such as Hooks, Suspense, NativeBase, and Apollo in this updated third edition
    Get to grips with the React architecture for writing easy-to-manage web and mobile applications
    Understand GraphQL and Apollo for building a scalable backend for your cross-platform apps

<strong>Book Description</strong>
<br><br>
React and React Native, Facebook's innovative User Interface (UI) libraries, are designed to help you build robust cross-platform web and mobile applications. This updated third edition is improved and updated to cover the latest version of React. The book particularly focuses on the latest developments in the React ecosystem, such as modern Hook implementations, code splitting using lazy components and Suspense, user interface framework components using Material-UI, and Apollo. In terms of React Native, the book has been updated to version 0.62 and demonstrates how to apply native UI components for your existing mobile apps using NativeBase.
<br><br>
You will begin by learning about the essential building blocks of React components. Next, you'll progress to working with higher-level functionalities in application development, before putting this knowledge to use by developing user interface components for the web and for native platforms. In the concluding chapters, you'll learn how to bring your application together with a robust data architecture.
<br><br>
By the end of this book, you'll be able to build React applications for the web and React Native applications for multiple mobile platforms.
<br><br>
<strong>What you will learn</strong>
<br><br>
  <ul>
   <li> Delve into the React architecture, component properties, state, and context</li>
    <li>Get to grips with React Hooks for handling functions and components</li>
    <li>Implement code splitting in React using lazy components and Suspense</li>
    <li>Build robust user interfaces for mobile and desktop apps using Material-UI</li>
    <li>Write shared components for Android and iOS mobile apps using React Native</li>
    <li>Simplify layout design for React Native apps using NativeBase</li>
    <li>Write GraphQL schemas to power web and mobile apps</li>
    <li>Implement web and mobile components that are driven by Apollo</li>
  </ul>
    
  <br><br>
<strong>Who this book is for</strong>
<br><br>
This book is for any JavaScript developer who wants to start learning how to use Facebook's UI libraries, React and React Native, for mobile and web application development. Although no prior knowledge of React is needed, working knowledge of JavaScript programming will help you understand the concepts covered in the book more effectively.
  
  `}
]

export default booksAvailable;