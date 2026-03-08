import { useParams } from "react-router-dom";
import ServicesHero from "./ServicesHero";
import MernServiceSection from "./MernSection";
import mernImg from "../assets/asian-helpdesk-representative-in-headphones-with-his-colleagues-providing-tech-support-services-to.jpg";
import aiImg from "../assets/course/AI.png";
import mlImg from "../assets/course/ML.png";
import dlImg from "../assets/course/DL.png";
import nlpImg from "../assets/course/NLP.png";
import awsImg from '../assets/course/AWS.png'
import dataImg from '../assets/course/DATA.png'
import azureImg from '../assets/course/azure.png'
import REACTimg from '../assets/course/REACT.png'
import ANGULAR from '../assets/course/ANGULAR.png'
import DEVOPSImg from '../assets/course/DEVOPS.png'
import JAVAimg from '../assets/course/JAVA.png'
import PYTHONimg from '../assets/course/PYTHON.png'
import NETimg from '../assets/course/NET.png'
import CICDAutomation from '../assets/course/CICDAutomation.png'
import ANDROIDimg from '../assets/course/ANDROID.png'
import SWIFT from '../assets/course/SWIFT.png'
import FLUTTER from '../assets/course/FLUTTER.png'
import UIUXDesign from '../assets/course/UIUXDesign.png'
import uiux from '../assets/course/uiux.png'
import prototype from '../assets/course/prototype.png'
import ToolsSection from "../component/ToolsSection";
import sql from '../assets/course/sql.png'
import Data_Warehousing from '../assets/course/Data Warehousing.png'
import data_admin from '../assets/course/data_admin.png'
import grapgic from '../assets/course/grapgic.png'
const courses = [

    // ================= AI & DATA =================

    {
        slug: "advanced-ai-engineering",
        bgImage: aiImg,
        hero: {
            title: "Advanced",
            highlight: "AI Engineering",
            description: "Design, develop and deploy production-ready AI systems for real-world applications."
        },
        serviceSection: {
            badgeText: "🤖 ADVANCED AI ENGINEERING",
            heading: "Build Enterprise-Grade AI Solutions",
            highlightText: "With Scalable Architectures.",
            descriptionOne:
                "Learn how to design end-to-end AI systems from raw data to deployment.\n" +
                "Understand scalable architectures for enterprise AI platforms.\n" +
                "Work with distributed training and cloud-based AI infrastructure.\n" +
                "Implement model optimization and performance tuning techniques.\n" +
                "Gain hands-on experience building production-ready AI pipelines.",

            descriptionTwo: `
    <p>
      This program introduces learners to the powerful world of 
      <strong>Artificial Intelligence, Data Science, and Advanced Analytics.</strong> 
      It focuses on building intelligent systems capable of learning from data 
      and making accurate predictions.
    </p>

    <p>
      Students will explore the core principles of machine learning, 
      data preprocessing, statistical analysis, and deep learning models 
      used in modern AI-driven applications.
    </p>

    <h5>Key Learning Areas</h5>
    <ul>
      <li>Artificial Intelligence Fundamentals</li>
      <li>Machine Learning Algorithms & Model Training</li>
      <li>Deep Learning and Neural Networks</li>
      <li>Data Visualization & Data Analytics</li>
      <li>Real-World Data Driven Decision Making</li>
    </ul>

    <p>
      Through hands-on projects and real datasets, learners gain practical 
      experience in solving complex problems and developing scalable 
      AI solutions used across industries like healthcare, finance, 
      e-commerce, and automation.
    </p>
  `
        }
    },

    {
        slug: "machine-learning",
        bgImage: mlImg,

        hero: {
            title: "Professional",
            highlight: "Machine Learning",
            description: "Master supervised and unsupervised learning techniques with real datasets."
        },
        serviceSection: {
            badgeText: "📊 MACHINE LEARNING",
            heading: "Create Intelligent Predictive Models",
            highlightText: "Using Advanced Algorithms.",
            descriptionOne:
                "Understand regression, classification, and clustering techniques.\n" +
                "Perform data preprocessing and feature engineering.\n" +
                "Train models using Scikit-learn and advanced ML libraries.\n" +
                "Evaluate model performance using industry metrics.\n" +
                "Work on real-world predictive analytics projects.",
            descriptionTwo: `<h2>Machine Learning Syllabus</h2>

<p>
Machine Learning is one of the most powerful technologies driving modern artificial intelligence. 
This course provides a comprehensive understanding of machine learning concepts, algorithms, 
and real-world applications. Students will learn how machines can analyze data, identify patterns, 
and make intelligent decisions with minimal human intervention.
</p>

<h3>1. Introduction to Machine Learning</h3>
<p>
This module introduces the fundamentals of machine learning and its importance in modern technology. 
Students will learn the difference between Artificial Intelligence, Machine Learning, and Deep Learning. 
The module also explains how machine learning is used in industries like healthcare, finance, e-commerce, 
cybersecurity, and social media.
</p>

<ul>
<li>What is Artificial Intelligence and Machine Learning</li>
<li>Types of Machine Learning: Supervised, Unsupervised, and Reinforcement Learning</li>
<li>Real-world applications of Machine Learning</li>
<li>Machine Learning workflow and lifecycle</li>
<li>Understanding datasets and data types</li>
</ul>

<h3>2. Python for Machine Learning</h3>
<p>
Python is the most widely used programming language for machine learning. This section teaches the 
fundamentals of Python programming required for building machine learning models.
</p>

<ul>
<li>Python basics for data science</li>
<li>Working with NumPy for numerical computing</li>
<li>Data manipulation using Pandas</li>
<li>Data visualization using Matplotlib and Seaborn</li>
<li>Handling datasets and preprocessing data</li>
</ul>

<h3>3. Data Preprocessing and Feature Engineering</h3>
<p>
Data preprocessing is a critical step in building effective machine learning models. Students will 
learn how to clean, transform, and prepare raw data for training algorithms.
</p>

<ul>
<li>Handling missing data</li>
<li>Data normalization and scaling</li>
<li>Feature selection and feature extraction</li>
<li>Encoding categorical variables</li>
<li>Data splitting: training and testing datasets</li>
</ul>

<h3>4. Supervised Machine Learning Algorithms</h3>
<p>
Supervised learning is one of the most widely used approaches in machine learning. Students will 
learn how to train models using labeled datasets.
</p>

<ul>
<li>Linear Regression</li>
<li>Logistic Regression</li>
<li>K-Nearest Neighbors (KNN)</li>
<li>Decision Trees</li>
<li>Random Forest</li>
<li>Support Vector Machines (SVM)</li>
<li>Naive Bayes</li>
</ul>

<h3>5. Unsupervised Learning</h3>
<p>
Unsupervised learning allows machines to discover hidden patterns in data without labeled outputs. 
This section focuses on clustering and dimensionality reduction techniques.
</p>

<ul>
<li>K-Means Clustering</li>
<li>Hierarchical Clustering</li>
<li>DBSCAN</li>
<li>Principal Component Analysis (PCA)</li>
<li>Market basket analysis</li>
</ul>

<h3>6. Model Evaluation and Optimization</h3>
<p>
Evaluating and improving model performance is crucial in machine learning. Students will learn how 
to measure model accuracy and optimize algorithms.
</p>

<ul>
<li>Confusion Matrix</li>
<li>Accuracy, Precision, Recall, and F1 Score</li>
<li>Cross-validation techniques</li>
<li>Hyperparameter tuning</li>
<li>Bias vs Variance tradeoff</li>
</ul>

<h3>7. Introduction to Deep Learning</h3>
<p>
This module introduces neural networks and deep learning concepts used in advanced AI systems such 
as image recognition, speech processing, and autonomous vehicles.
</p>

<ul>
<li>Artificial Neural Networks</li>
<li>Activation functions</li>
<li>Forward and backward propagation</li>
<li>Introduction to TensorFlow and Keras</li>
<li>Basic deep learning models</li>
</ul>

<h3>8. Real-World Machine Learning Projects</h3>
<p>
Students will work on practical projects to apply their knowledge and build real machine learning 
solutions used in industry.
</p>

<ul>
<li>Spam email detection</li>
<li>House price prediction</li>
<li>Customer segmentation</li>
<li>Movie recommendation system</li>
<li>Stock market prediction basics</li>
</ul>

<h3>9. Machine Learning Deployment</h3>
<p>
In this module, students will learn how to deploy machine learning models so they can be used in 
real-world applications.
</p>

<ul>
<li>Saving and loading trained models</li>
<li>Building APIs for ML models</li>
<li>Deploying models using Flask or FastAPI</li>
<li>Introduction to cloud deployment</li>
</ul>

<h3>10. Career Opportunities in Machine Learning</h3>
<p>
The course concludes with guidance on career paths in machine learning and artificial intelligence. 
Students will learn about roles such as Machine Learning Engineer, Data Scientist, AI Engineer, 
and Data Analyst.
</p>`
        }
    },

    {
        slug: "deep-learning",
        bgImage: dlImg,

        hero: {
            title: "Advanced",
            highlight: "Deep Learning",
            description: "Build neural networks and deep learning models for complex problems."
        },
        serviceSection: {
            badgeText: "🧠 DEEP LEARNING",
            heading: "Design Neural Network Architectures",
            highlightText: "For Real-World Applications.",
            descriptionOne:
                "Understand artificial neural networks and backpropagation.\n" +
                "Build CNN, RNN, LSTM, and Transformer models.\n" +
                "Train deep learning models using TensorFlow and PyTorch.\n" +
                "Work on image, text, and speech processing projects.\n" +
                "Optimize deep learning performance using GPUs.",
            descriptionTwo: `<h2>Deep Learning Syllabus</h2>

<p>
Deep Learning is an advanced subset of Artificial Intelligence and Machine Learning that focuses on 
neural networks capable of learning complex patterns from large datasets. This course provides a 
comprehensive understanding of deep neural networks, modern architectures, and real-world 
applications such as computer vision, natural language processing, and autonomous systems.
</p>

<h3>1. Introduction to Deep Learning</h3>
<p>
This module introduces the fundamentals of deep learning and explains how it differs from traditional 
machine learning approaches. Students will explore how neural networks simulate the behavior of the 
human brain to process information and make intelligent decisions.
</p>

<ul>
<li>Overview of Artificial Intelligence, Machine Learning, and Deep Learning</li>
<li>History and evolution of neural networks</li>
<li>Applications of Deep Learning in modern industries</li>
<li>Understanding neural networks and learning mechanisms</li>
<li>Deep learning workflow and model lifecycle</li>
</ul>

<h3>2. Mathematical Foundations for Deep Learning</h3>
<p>
Deep learning relies heavily on mathematical concepts. This section provides an overview of the 
essential mathematical principles used in neural networks and optimization algorithms.
</p>

<ul>
<li>Linear algebra fundamentals</li>
<li>Vectors, matrices, and tensors</li>
<li>Probability and statistics basics</li>
<li>Calculus for neural networks</li>
<li>Gradient descent and optimization techniques</li>
</ul>

<h3>3. Python and Deep Learning Libraries</h3>
<p>
Students will learn how to use Python and its powerful deep learning libraries to build neural 
network models and process large datasets efficiently.
</p>

<ul>
<li>Python programming for AI</li>
<li>NumPy for numerical computing</li>
<li>Pandas for data manipulation</li>
<li>Matplotlib and Seaborn for visualization</li>
<li>Introduction to TensorFlow and PyTorch</li>
<li>Keras framework for neural networks</li>
</ul>

<h3>4. Artificial Neural Networks (ANN)</h3>
<p>
Artificial Neural Networks are the foundation of deep learning. This module explains how neural 
networks function and how they learn from data through forward and backward propagation.
</p>

<ul>
<li>Structure of a neural network</li>
<li>Perceptron model</li>
<li>Activation functions (ReLU, Sigmoid, Tanh)</li>
<li>Forward propagation</li>
<li>Backpropagation algorithm</li>
<li>Loss functions and optimization</li>
</ul>

<h3>5. Convolutional Neural Networks (CNN)</h3>
<p>
CNNs are widely used in computer vision tasks such as image classification, object detection, 
and facial recognition. This module focuses on CNN architecture and applications.
</p>

<ul>
<li>Image processing fundamentals</li>
<li>Convolution layers and filters</li>
<li>Pooling layers and feature extraction</li>
<li>CNN architectures (LeNet, AlexNet, VGG)</li>
<li>Image classification models</li>
<li>Transfer learning techniques</li>
</ul>

<h3>6. Recurrent Neural Networks (RNN)</h3>
<p>
RNNs are designed to work with sequential data such as text, speech, and time-series data. 
Students will learn how RNNs process sequential information.
</p>

<ul>
<li>Introduction to sequential data</li>
<li>Structure of recurrent neural networks</li>
<li>Vanishing gradient problem</li>
<li>Long Short-Term Memory (LSTM)</li>
<li>Gated Recurrent Units (GRU)</li>
<li>Applications in speech recognition and NLP</li>
</ul>

<h3>7. Natural Language Processing with Deep Learning</h3>
<p>
This module focuses on using deep learning techniques to understand and process human language. 
Students will learn about models used in chatbots, translation systems, and sentiment analysis.
</p>

<ul>
<li>Text preprocessing and tokenization</li>
<li>Word embeddings (Word2Vec, GloVe)</li>
<li>Sequence models for language tasks</li>
<li>Sentiment analysis</li>
<li>Machine translation</li>
<li>Transformer models and attention mechanisms</li>
</ul>

<h3>8. Advanced Deep Learning Techniques</h3>
<p>
Students will explore advanced deep learning architectures used in modern AI applications.
</p>

<ul>
<li>Autoencoders</li>
<li>Generative Adversarial Networks (GANs)</li>
<li>Transfer learning</li>
<li>Fine-tuning deep neural networks</li>
<li>Model regularization techniques</li>
<li>Batch normalization and dropout</li>
</ul>

<h3>9. Model Training and Optimization</h3>
<p>
This section focuses on improving model performance and ensuring reliable predictions.
</p>

<ul>
<li>Model evaluation metrics</li>
<li>Hyperparameter tuning</li>
<li>Overfitting and underfitting</li>
<li>Early stopping techniques</li>
<li>Cross-validation strategies</li>
</ul>

<h3>10. Real-World Deep Learning Projects</h3>
<p>
Students will apply deep learning knowledge to practical projects and real-world datasets.
</p>

<ul>
<li>Image recognition system</li>
<li>Handwritten digit recognition</li>
<li>Chatbot using neural networks</li>
<li>Face detection system</li>
<li>Text classification model</li>
</ul>

<h3>11. Deploying Deep Learning Models</h3>
<p>
In this module, students will learn how to deploy trained deep learning models into production 
applications using modern frameworks and cloud platforms.
</p>

<ul>
<li>Saving and loading trained models</li>
<li>Building APIs using Flask or FastAPI</li>
<li>Model deployment using Docker</li>
<li>Cloud deployment using AWS or Google Cloud</li>
</ul>

<h3>12. Career Opportunities in Deep Learning</h3>
<p>
Deep learning is one of the fastest-growing fields in technology. This module provides insights 
into career opportunities and industry roles in AI and deep learning.
</p>

<ul>
<li>Deep Learning Engineer</li>
<li>AI Research Scientist</li>
<li>Computer Vision Engineer</li>
<li>Natural Language Processing Engineer</li>
<li>AI Product Developer</li>
</ul>`
        }
    },

    {
        slug: "nlp-computer-vision",
        bgImage: nlpImg,

        hero: {
            title: "NLP &",
            highlight: "Computer Vision",
            description: "Build intelligent systems that understand language and visual data."
        },
        serviceSection: {
            badgeText: "📚 NLP & COMPUTER VISION",
            heading: "Develop Smart AI Vision & Language Systems",
            highlightText: "Using Modern Frameworks.",
            descriptionOne:
                "Work with text classification and sentiment analysis.\n" +
                "Implement Named Entity Recognition and transformers.\n" +
                "Build image recognition and object detection systems.\n" +
                "Use OpenCV and deep learning for vision tasks.\n" +
                "Train NLP and CV models using real-world datasets.",
            descriptionTwo: `<h2>NLP & Computer Vision Syllabus</h2>

<p>
Natural Language Processing (NLP) and Computer Vision are two of the most powerful fields in 
Artificial Intelligence. NLP focuses on enabling machines to understand, interpret, and generate 
human language, while Computer Vision allows machines to analyze and understand visual data such 
as images and videos. This course provides comprehensive knowledge of both technologies and their 
real-world applications.
</p>

<h3>1. Introduction to NLP and Computer Vision</h3>
<p>
This module introduces the fundamentals of Natural Language Processing and Computer Vision, 
explaining how machines interpret text and visual information. Students will explore real-world 
applications such as chatbots, recommendation systems, facial recognition, and autonomous vehicles.
</p>

<ul>
<li>Overview of Artificial Intelligence and Deep Learning</li>
<li>Introduction to Natural Language Processing</li>
<li>Introduction to Computer Vision</li>
<li>Applications of NLP and Computer Vision</li>
<li>Industry use cases and future trends</li>
</ul>

<h3>2. Python for NLP and Computer Vision</h3>
<p>
Students will learn how to use Python programming along with powerful libraries used in NLP and 
Computer Vision development.
</p>

<ul>
<li>Python fundamentals for AI development</li>
<li>NumPy and Pandas for data handling</li>
<li>Data visualization using Matplotlib and Seaborn</li>
<li>Introduction to NLP libraries such as NLTK and spaCy</li>
<li>Introduction to OpenCV for computer vision tasks</li>
</ul>

<h3>3. Text Preprocessing in NLP</h3>
<p>
Text preprocessing is a crucial step in Natural Language Processing. This module focuses on 
cleaning and preparing textual data for machine learning models.
</p>

<ul>
<li>Tokenization techniques</li>
<li>Stop word removal</li>
<li>Stemming and lemmatization</li>
<li>Text normalization</li>
<li>Handling large text datasets</li>
</ul>

<h3>4. Feature Extraction for NLP</h3>
<p>
In this module, students will learn how textual data is converted into numerical formats 
that machine learning models can understand.
</p>

<ul>
<li>Bag of Words model</li>
<li>TF-IDF vectorization</li>
<li>Word embeddings</li>
<li>Word2Vec and GloVe</li>
<li>Sentence embeddings</li>
</ul>

<h3>5. Natural Language Processing Models</h3>
<p>
Students will explore various machine learning and deep learning models used for solving 
language-based problems.
</p>

<ul>
<li>Text classification</li>
<li>Sentiment analysis</li>
<li>Named Entity Recognition (NER)</li>
<li>Part-of-speech tagging</li>
<li>Language modeling</li>
</ul>

<h3>6. Transformers and Modern NLP</h3>
<p>
Modern NLP relies heavily on transformer-based architectures. This module introduces 
advanced models used in cutting-edge AI systems.
</p>

<ul>
<li>Attention mechanism</li>
<li>Transformer architecture</li>
<li>BERT and GPT models</li>
<li>Text summarization</li>
<li>Question-answering systems</li>
</ul>

<h3>7. Introduction to Computer Vision</h3>
<p>
This module introduces how machines process and understand visual information from images 
and videos using deep learning techniques.
</p>

<ul>
<li>Image processing fundamentals</li>
<li>Digital image representation</li>
<li>Image filtering and transformations</li>
<li>Introduction to OpenCV</li>
<li>Image preprocessing techniques</li>
</ul>

<h3>8. Convolutional Neural Networks (CNN)</h3>
<p>
CNNs are the backbone of most computer vision applications. Students will learn how CNNs 
extract features from images and perform visual recognition tasks.
</p>

<ul>
<li>Convolution layers and kernels</li>
<li>Pooling and feature extraction</li>
<li>CNN architecture design</li>
<li>Image classification models</li>
<li>Transfer learning with pretrained models</li>
</ul>

<h3>9. Object Detection and Image Recognition</h3>
<p>
This module focuses on detecting and identifying objects in images and videos using 
advanced deep learning models.
</p>

<ul>
<li>Object detection fundamentals</li>
<li>YOLO algorithm</li>
<li>Region-based CNN (R-CNN)</li>
<li>Image segmentation techniques</li>
<li>Facial recognition systems</li>
</ul>

<h3>10. Video Analysis and Real-Time Vision Systems</h3>
<p>
Students will learn how computer vision models process video streams and real-time 
visual data for intelligent applications.
</p>

<ul>
<li>Video frame processing</li>
<li>Motion detection</li>
<li>Activity recognition</li>
<li>Real-time object tracking</li>
<li>Autonomous vision systems</li>
</ul>

<h3>11. Real-World Projects</h3>
<p>
Students will work on practical projects to apply their NLP and Computer Vision knowledge 
in real-world scenarios.
</p>

<ul>
<li>Sentiment analysis system</li>
<li>Chatbot development</li>
<li>Image classification system</li>
<li>Face detection application</li>
<li>Document text extraction system</li>
</ul>

<h3>12. Deployment and Production</h3>
<p>
This module covers how to deploy NLP and Computer Vision models into real-world 
applications and production environments.
</p>

<ul>
<li>Model deployment using APIs</li>
<li>Deploying models with Flask or FastAPI</li>
<li>Containerization with Docker</li>
<li>Cloud deployment using AWS or Google Cloud</li>
</ul>

<h3>13. Career Opportunities</h3>
<p>
NLP and Computer Vision professionals are highly demanded across industries such as 
healthcare, finance, e-commerce, robotics, and autonomous systems.
</p>

<ul>
<li>NLP Engineer</li>
<li>Computer Vision Engineer</li>
<li>AI Research Scientist</li>
<li>Machine Learning Engineer</li>
<li>AI Application Developer</li>
</ul>`
        }
    },

    {
        slug: "data-engineering",
        bgImage: dataImg,

        hero: {
            title: "Modern",
            highlight: "Data Engineering",
            description: "Design scalable data pipelines and distributed systems."
        },
        serviceSection: {
            badgeText: "⚙️ DATA ENGINEERING",
            heading: "Build Scalable Data Pipelines",
            highlightText: "For Enterprise Applications.",
            descriptionOne:
                "Learn ETL processes and data transformation workflows.\n" +
                "Design distributed data systems and streaming pipelines.\n" +
                "Work with Apache Spark and big data tools.\n" +
                "Handle structured and unstructured datasets efficiently.\n" +
                "Build scalable data infrastructure solutions.",
            descriptionTwo: `<h2>Data Engineering Syllabus</h2>

<p>
Data Engineering focuses on designing, building, and maintaining systems that collect, store, 
process, and analyze large volumes of data. This course provides comprehensive knowledge of 
data pipelines, big data technologies, cloud platforms, and data processing frameworks used 
in modern data-driven organizations.
</p>

<h3>1. Introduction to Data Engineering</h3>
<p>
This module introduces the fundamentals of data engineering and explains the role of data 
engineers in modern organizations. Students will learn how data is collected, processed, 
stored, and transformed into meaningful insights.
</p>

<ul>
<li>Overview of Data Engineering</li>
<li>Role of Data Engineers in the data ecosystem</li>
<li>Difference between Data Engineering, Data Science, and Data Analytics</li>
<li>Data lifecycle and architecture</li>
<li>Industry applications of data engineering</li>
</ul>

<h3>2. Programming for Data Engineering</h3>
<p>
Programming skills are essential for building scalable data pipelines. Students will learn 
how to use Python and other programming tools to process and manipulate large datasets.
</p>

<ul>
<li>Python programming for data processing</li>
<li>Working with NumPy and Pandas</li>
<li>Data structures and algorithms for data processing</li>
<li>Handling structured and unstructured data</li>
<li>Scripting and automation</li>
</ul>

<h3>3. Databases and Data Storage</h3>
<p>
This module covers different types of databases and storage systems used in data engineering 
to store and manage large volumes of data efficiently.
</p>

<ul>
<li>Relational databases (MySQL, PostgreSQL)</li>
<li>NoSQL databases (MongoDB, Cassandra)</li>
<li>Data modeling techniques</li>
<li>Database indexing and query optimization</li>
<li>Data warehousing concepts</li>
</ul>

<h3>4. SQL for Data Engineering</h3>
<p>
Structured Query Language (SQL) is a core skill for data engineers. Students will learn how 
to write efficient queries for retrieving, transforming, and analyzing data.
</p>

<ul>
<li>SQL fundamentals</li>
<li>Advanced SQL queries</li>
<li>Joins and subqueries</li>
<li>Window functions</li>
<li>Query optimization techniques</li>
</ul>

<h3>5. Data Processing and Transformation</h3>
<p>
Students will learn how raw data is cleaned, transformed, and prepared for analysis using 
various tools and frameworks.
</p>

<ul>
<li>ETL (Extract, Transform, Load) processes</li>
<li>Data cleaning and transformation</li>
<li>Batch data processing</li>
<li>Data validation and quality checks</li>
<li>Building scalable data pipelines</li>
</ul>

<h3>6. Big Data Technologies</h3>
<p>
This module introduces big data frameworks and technologies used for processing massive 
datasets efficiently.
</p>

<ul>
<li>Introduction to Big Data</li>
<li>Hadoop ecosystem</li>
<li>Apache Spark fundamentals</li>
<li>Distributed data processing</li>
<li>Real-time data streaming</li>
</ul>

<h3>7. Data Warehousing</h3>
<p>
Data warehouses are essential for analytics and business intelligence. This section 
explains how data warehouses are designed and implemented.
</p>

<ul>
<li>Data warehouse architecture</li>
<li>Star and snowflake schemas</li>
<li>OLAP and OLTP systems</li>
<li>Data marts</li>
<li>Business intelligence integration</li>
</ul>

<h3>8. Cloud Data Engineering</h3>
<p>
Modern data infrastructure is often built on cloud platforms. Students will learn how to 
design scalable data systems using cloud technologies.
</p>

<ul>
<li>Introduction to cloud computing</li>
<li>AWS data services</li>
<li>Google Cloud data tools</li>
<li>Azure data engineering services</li>
<li>Cloud storage and distributed systems</li>
</ul>

<h3>9. Data Pipeline Orchestration</h3>
<p>
Managing complex data workflows requires orchestration tools. This module introduces tools 
used for scheduling, monitoring, and managing data pipelines.
</p>

<ul>
<li>Workflow automation</li>
<li>Apache Airflow basics</li>
<li>Data pipeline scheduling</li>
<li>Monitoring and logging</li>
<li>Handling pipeline failures</li>
</ul>

<h3>10. Real-Time Data Processing</h3>
<p>
Many modern applications require real-time data processing. Students will learn how to 
build systems that process streaming data.
</p>

<ul>
<li>Introduction to streaming data</li>
<li>Apache Kafka fundamentals</li>
<li>Real-time data pipelines</li>
<li>Event-driven architecture</li>
<li>Streaming analytics</li>
</ul>

<h3>11. Data Security and Governance</h3>
<p>
Data security and governance are critical for protecting sensitive data and ensuring 
compliance with regulations.
</p>

<ul>
<li>Data privacy and protection</li>
<li>Access control and authentication</li>
<li>Data governance frameworks</li>
<li>Compliance and regulatory standards</li>
<li>Data auditing and monitoring</li>
</ul>

<h3>12. Real-World Data Engineering Projects</h3>
<p>
Students will work on practical projects that simulate real-world data engineering 
scenarios and build scalable data systems.
</p>

<ul>
<li>Building an ETL pipeline</li>
<li>Real-time data streaming application</li>
<li>Designing a data warehouse</li>
<li>Big data analytics pipeline</li>
<li>Cloud-based data processing system</li>
</ul>

<h3>13. Career Opportunities in Data Engineering</h3>
<p>
Data engineering is one of the fastest-growing roles in the data industry. This module 
introduces career paths and job opportunities in the field.
</p>

<ul>
<li>Data Engineer</li>
<li>Big Data Engineer</li>
<li>Cloud Data Engineer</li>
<li>Data Platform Engineer</li>
<li>Analytics Engineer</li>
</ul>`
        }
    },

    // ================= CLOUD & DEVOPS =================

    {
        slug: "aws-solutions-architect",
        bgImage: awsImg,

        hero: {
            title: "AWS",
            highlight: "Solutions Architect",
            description: "Design and deploy scalable cloud infrastructure on AWS."
        },
        serviceSection: {
            badgeText: "☁️ AWS SOLUTIONS ARCHITECT",
            heading: "Architect Secure & Scalable Cloud Systems",
            highlightText: "Using AWS Best Practices.",
            descriptionOne:
                "Master EC2, S3, RDS, and Lambda services.\n" +
                "Design high-availability architectures.\n" +
                "Implement VPC networking and IAM policies.\n" +
                "Work with load balancing and auto scaling.\n" +
                "Build secure and cost-optimized systems.",
            descriptionTwo: `<h2>AWS Solutions Architect Syllabus</h2>

<p>
The AWS Solutions Architect course provides in-depth knowledge of designing scalable, secure, 
and highly available applications on Amazon Web Services (AWS). This course helps learners 
understand cloud architecture, infrastructure design, and best practices for building 
reliable and cost-efficient cloud solutions using AWS services.
</p>

<h3>1. Introduction to Cloud Computing</h3>
<p>
This module introduces cloud computing concepts and explains how AWS has transformed 
modern IT infrastructure. Students will understand cloud service models and deployment 
strategies used by organizations worldwide.
</p>

<ul>
<li>What is Cloud Computing</li>
<li>Benefits of cloud infrastructure</li>
<li>Cloud service models: IaaS, PaaS, SaaS</li>
<li>Public, Private, and Hybrid Cloud</li>
<li>Overview of Amazon Web Services</li>
</ul>

<h3>2. AWS Global Infrastructure</h3>
<p>
Understanding AWS global infrastructure is essential for designing highly available and 
fault-tolerant systems.
</p>

<ul>
<li>AWS Regions and Availability Zones</li>
<li>Edge locations and content delivery</li>
<li>High availability and fault tolerance</li>
<li>AWS infrastructure design principles</li>
</ul>

<h3>3. Identity and Access Management (IAM)</h3>
<p>
Security is a critical component of cloud architecture. This module focuses on managing 
users, roles, and permissions in AWS.
</p>

<ul>
<li>IAM users, groups, and roles</li>
<li>Access policies and permissions</li>
<li>Multi-Factor Authentication (MFA)</li>
<li>Security best practices in AWS</li>
</ul>

<h3>4. Compute Services</h3>
<p>
Compute services allow developers to run applications and workloads in the cloud. 
Students will learn how to deploy and manage applications using AWS compute services.
</p>

<ul>
<li>Amazon EC2 fundamentals</li>
<li>Instance types and pricing models</li>
<li>Auto Scaling groups</li>
<li>Elastic Load Balancing (ELB)</li>
<li>AWS Lambda serverless computing</li>
</ul>

<h3>5. Storage Services</h3>
<p>
AWS provides various storage solutions designed for different use cases. This module 
explores storage options and best practices.
</p>

<ul>
<li>Amazon S3 object storage</li>
<li>S3 storage classes</li>
<li>Amazon EBS block storage</li>
<li>Amazon EFS file storage</li>
<li>Data backup and recovery strategies</li>
</ul>

<h3>6. Database Services</h3>
<p>
This module focuses on database solutions available in AWS for different types of 
applications and workloads.
</p>

<ul>
<li>Amazon RDS managed databases</li>
<li>Amazon DynamoDB NoSQL database</li>
<li>Amazon Aurora database engine</li>
<li>Database scaling and replication</li>
<li>Backup and disaster recovery</li>
</ul>

<h3>7. Networking and Content Delivery</h3>
<p>
Networking is essential for connecting cloud resources securely and efficiently.
</p>

<ul>
<li>Amazon VPC fundamentals</li>
<li>Subnets, route tables, and gateways</li>
<li>Internet Gateway and NAT Gateway</li>
<li>AWS Direct Connect</li>
<li>Amazon CloudFront CDN</li>
</ul>

<h3>8. Monitoring and Management</h3>
<p>
Monitoring ensures that applications run efficiently and issues are detected early.
</p>

<ul>
<li>Amazon CloudWatch monitoring</li>
<li>AWS CloudTrail logging</li>
<li>AWS Config for resource tracking</li>
<li>Infrastructure monitoring and alerts</li>
</ul>

<h3>9. Security and Compliance</h3>
<p>
Security and compliance are fundamental aspects of cloud architecture. Students will 
learn how to secure applications and data in AWS.
</p>

<ul>
<li>AWS shared responsibility model</li>
<li>Data encryption techniques</li>
<li>AWS Key Management Service (KMS)</li>
<li>Security auditing and compliance</li>
</ul>

<h3>10. High Availability and Fault-Tolerant Architecture</h3>
<p>
This module explains how to design resilient systems that remain operational even 
during infrastructure failures.
</p>

<ul>
<li>Multi-AZ architecture</li>
<li>Load balancing strategies</li>
<li>Auto scaling and failover systems</li>
<li>Disaster recovery planning</li>
</ul>

<h3>11. Cost Optimization</h3>
<p>
One of the key responsibilities of an AWS Solutions Architect is designing cost-efficient 
cloud infrastructure.
</p>

<ul>
<li>AWS pricing models</li>
<li>Cost optimization strategies</li>
<li>Reserved instances and savings plans</li>
<li>AWS Cost Explorer and budgeting</li>
</ul>

<h3>12. Real-World AWS Architecture Projects</h3>
<p>
Students will build real-world projects that simulate production-level cloud 
architectures used by enterprises.
</p>

<ul>
<li>Deploying a scalable web application</li>
<li>Building serverless architectures</li>
<li>Designing a secure VPC network</li>
<li>Creating a highly available multi-tier application</li>
<li>Implementing cloud monitoring and alerts</li>
</ul>

<h3>13. AWS Certification and Career Opportunities</h3>
<p>
This module prepares students for AWS certification exams and explores career 
opportunities in cloud architecture.
</p>

<ul>
<li>AWS Solutions Architect certification overview</li>
<li>Exam preparation strategies</li>
<li>Cloud architect career roadmap</li>
<li>Job roles and industry demand</li>
</ul>`
        }
    },

    {
        slug: "azure-gcp",
        bgImage: azureImg,

        hero: {
            title: "Azure &",
            highlight: "Google Cloud",
            description: "Deploy enterprise-grade applications on multi-cloud platforms."
        },
        serviceSection: {
            badgeText: "☁️ AZURE & GCP",
            heading: "Multi-Cloud Infrastructure Mastery",
            highlightText: "For Scalable Systems.",
            descriptionOne:
                "Learn Azure Virtual Machines and App Services.\n" +
                "Understand GCP Compute Engine and Kubernetes Engine.\n" +
                "Implement identity and access management securely.\n" +
                "Deploy containerized applications efficiently.\n" +
                "Design resilient multi-cloud architectures.",
            descriptionTwo: `<h2>Azure & Google Cloud Platform (GCP) Syllabus</h2>

<p>
This course provides comprehensive training on two of the most powerful cloud platforms: 
Microsoft Azure and Google Cloud Platform (GCP). Students will learn how to build, deploy, 
and manage scalable applications using cloud infrastructure, storage systems, networking 
services, and modern DevOps tools. The course focuses on practical implementation and 
real-world cloud architecture used by modern organizations.
</p>

<h3>1. Introduction to Cloud Computing</h3>
<p>
This module introduces the fundamentals of cloud computing and explains how organizations 
use cloud platforms to build scalable and reliable applications.
</p>

<ul>
<li>Cloud computing fundamentals</li>
<li>Benefits of cloud infrastructure</li>
<li>Cloud service models (IaaS, PaaS, SaaS)</li>
<li>Public, private, and hybrid cloud environments</li>
<li>Overview of Microsoft Azure and Google Cloud Platform</li>
</ul>

<h3>2. Microsoft Azure Fundamentals</h3>
<p>
Students will learn the core services offered by Microsoft Azure and how to use them to 
build scalable and secure cloud applications.
</p>

<ul>
<li>Azure global infrastructure</li>
<li>Azure portal and resource management</li>
<li>Azure virtual machines</li>
<li>Azure storage services</li>
<li>Azure networking fundamentals</li>
</ul>

<h3>3. Google Cloud Platform Fundamentals</h3>
<p>
This module introduces the main services provided by Google Cloud Platform and how they 
are used for cloud application development and deployment.
</p>

<ul>
<li>GCP global infrastructure</li>
<li>Google Cloud Console and project setup</li>
<li>Compute Engine virtual machines</li>
<li>Google Cloud Storage</li>
<li>GCP networking and load balancing</li>
</ul>

<h3>4. Identity and Access Management</h3>
<p>
Security and access control are critical in cloud environments. This module focuses on 
managing identities, roles, and permissions in both Azure and GCP.
</p>

<ul>
<li>Azure Active Directory</li>
<li>Role-based access control (RBAC)</li>
<li>Google Cloud IAM</li>
<li>Authentication and authorization strategies</li>
<li>Multi-factor authentication</li>
</ul>

<h3>5. Compute Services</h3>
<p>
Compute services allow developers to run applications and workloads on cloud infrastructure.
</p>

<ul>
<li>Azure Virtual Machines</li>
<li>Azure App Services</li>
<li>Google Compute Engine</li>
<li>Google Kubernetes Engine (GKE)</li>
<li>Serverless computing with Azure Functions and Google Cloud Functions</li>
</ul>

<h3>6. Storage and Database Services</h3>
<p>
This module covers different storage solutions and database services available in both 
cloud platforms.
</p>

<ul>
<li>Azure Blob Storage</li>
<li>Azure SQL Database</li>
<li>Google Cloud Storage</li>
<li>Cloud SQL and Firestore</li>
<li>Data backup and disaster recovery strategies</li>
</ul>

<h3>7. Networking in Azure and GCP</h3>
<p>
Networking enables communication between cloud resources and ensures secure connectivity.
</p>

<ul>
<li>Virtual networks in Azure</li>
<li>Google Cloud Virtual Private Cloud (VPC)</li>
<li>Subnets and routing</li>
<li>Load balancing</li>
<li>Secure network design</li>
</ul>

<h3>8. Monitoring and Logging</h3>
<p>
Monitoring tools help maintain system performance and detect issues quickly.
</p>

<ul>
<li>Azure Monitor and Log Analytics</li>
<li>Google Cloud Operations Suite</li>
<li>Performance monitoring</li>
<li>Logging and alerting systems</li>
</ul>

<h3>9. DevOps and Automation</h3>
<p>
This module focuses on automation and continuous integration practices in cloud environments.
</p>

<ul>
<li>Azure DevOps tools</li>
<li>CI/CD pipelines</li>
<li>Infrastructure as Code</li>
<li>Automation using cloud scripts</li>
<li>Containerization and deployment</li>
</ul>

<h3>10. Security and Compliance</h3>
<p>
Students will learn best practices for securing cloud resources and protecting sensitive data.
</p>

<ul>
<li>Cloud security principles</li>
<li>Data encryption techniques</li>
<li>Key management services</li>
<li>Security monitoring and auditing</li>
<li>Compliance standards in cloud environments</li>
</ul>

<h3>11. Cloud Architecture Design</h3>
<p>
This module focuses on designing scalable, fault-tolerant, and cost-efficient cloud 
architectures.
</p>

<ul>
<li>Designing highly available systems</li>
<li>Load balancing strategies</li>
<li>Auto-scaling infrastructure</li>
<li>Microservices architecture</li>
<li>Cloud architecture best practices</li>
</ul>

<h3>12. Real-World Cloud Projects</h3>
<p>
Students will work on practical projects that simulate real-world cloud deployments 
using Azure and GCP platforms.
</p>

<ul>
<li>Deploying a cloud-based web application</li>
<li>Building a scalable cloud infrastructure</li>
<li>Containerized application deployment</li>
<li>Cloud monitoring and performance optimization</li>
</ul>

<h3>13. Certification and Career Opportunities</h3>
<p>
The course concludes with guidance on certification paths and career opportunities 
in cloud computing.
</p>

<ul>
<li>Microsoft Azure certification roadmap</li>
<li>Google Cloud certification roadmap</li>
<li>Cloud engineer career paths</li>
<li>Industry demand for cloud professionals</li>
</ul>`
        }
    },

    {
        slug: "devsecops",
        bgImage: DEVOPSImg,

        hero: {
            title: "Secure",
            highlight: "DevSecOps",
            description: "Integrate security into DevOps pipelines seamlessly."
        },
        serviceSection: {
            badgeText: "🔐 DEVSECOPS",
            heading: "Secure CI/CD Pipelines",
            highlightText: "With Automated Security.",
            descriptionOne:
                "Understand DevOps lifecycle deeply.\n" +
                "Implement automated security testing.\n" +
                "Use container scanning tools.\n" +
                "Integrate compliance checks into CI/CD.\n" +
                "Build secure DevOps workflows.",
            descriptionTwo: `<h2>DevSecOps Syllabus</h2>

<p>
DevSecOps integrates security practices into the DevOps lifecycle to ensure that applications 
are developed, tested, and deployed with security as a core component. This course provides 
a comprehensive understanding of secure software development, automated security testing, 
continuous integration and delivery pipelines, and cloud security practices used in modern 
software engineering environments.
</p>

<h3>1. Introduction to DevSecOps</h3>
<p>
This module introduces the fundamentals of DevSecOps and explains how security is integrated 
into the DevOps workflow. Students will learn the importance of embedding security into every 
stage of the software development lifecycle.
</p>

<ul>
<li>Overview of DevOps and DevSecOps</li>
<li>Importance of security in modern software development</li>
<li>DevSecOps lifecycle and workflow</li>
<li>Benefits of shifting security left</li>
<li>Industry use cases and trends</li>
</ul>

<h3>2. DevOps Fundamentals</h3>
<p>
Students will learn the foundational DevOps concepts and tools used to automate software 
development and deployment processes.
</p>

<ul>
<li>Version control with Git</li>
<li>Continuous Integration (CI)</li>
<li>Continuous Delivery and Continuous Deployment (CD)</li>
<li>Build automation tools</li>
<li>Infrastructure automation</li>
</ul>

<h3>3. Secure Coding Practices</h3>
<p>
Secure coding is a critical part of DevSecOps. This module focuses on writing secure 
applications and identifying common vulnerabilities.
</p>

<ul>
<li>Secure software development lifecycle (SSDLC)</li>
<li>Common security vulnerabilities (OWASP Top 10)</li>
<li>Secure coding standards</li>
<li>Code review and security analysis</li>
<li>Threat modeling</li>
</ul>

<h3>4. Security Testing in DevOps</h3>
<p>
This module covers automated security testing techniques used during development 
and deployment pipelines.
</p>

<ul>
<li>Static Application Security Testing (SAST)</li>
<li>Dynamic Application Security Testing (DAST)</li>
<li>Software Composition Analysis (SCA)</li>
<li>Container security scanning</li>
<li>Automated vulnerability detection</li>
</ul>

<h3>5. CI/CD Pipeline Security</h3>
<p>
Students will learn how to integrate security checks into CI/CD pipelines to prevent 
vulnerabilities from reaching production environments.
</p>

<ul>
<li>CI/CD pipeline architecture</li>
<li>Secure pipeline design</li>
<li>Integrating security tools into pipelines</li>
<li>Secrets management</li>
<li>Pipeline monitoring and alerts</li>
</ul>

<h3>6. Container Security</h3>
<p>
Containers are widely used in modern application deployment. This module focuses on 
securing containerized environments.
</p>

<ul>
<li>Introduction to Docker containers</li>
<li>Container vulnerability scanning</li>
<li>Secure container images</li>
<li>Kubernetes security fundamentals</li>
<li>Container runtime protection</li>
</ul>

<h3>7. Infrastructure as Code Security</h3>
<p>
Infrastructure as Code (IaC) allows teams to automate infrastructure deployment. 
Students will learn how to secure infrastructure configurations.
</p>

<ul>
<li>Introduction to Infrastructure as Code</li>
<li>Terraform and configuration management</li>
<li>Secure infrastructure provisioning</li>
<li>Infrastructure compliance checks</li>
<li>Policy-as-code practices</li>
</ul>

<h3>8. Cloud Security</h3>
<p>
Cloud platforms require strong security practices. This module focuses on securing 
applications and infrastructure deployed on cloud environments.
</p>

<ul>
<li>Cloud security fundamentals</li>
<li>Identity and access management</li>
<li>Secure cloud architecture</li>
<li>Data protection and encryption</li>
<li>Monitoring and auditing cloud environments</li>
</ul>

<h3>9. Monitoring and Incident Response</h3>
<p>
Monitoring helps detect threats and vulnerabilities in real time. Students will learn 
how to monitor systems and respond to security incidents.
</p>

<ul>
<li>Security monitoring tools</li>
<li>Log management and analysis</li>
<li>Threat detection</li>
<li>Incident response planning</li>
<li>Security automation</li>
</ul>

<h3>10. Compliance and Governance</h3>
<p>
Organizations must follow regulatory standards to ensure data security and privacy.
</p>

<ul>
<li>Security compliance frameworks</li>
<li>Risk management strategies</li>
<li>Data protection regulations</li>
<li>Security governance models</li>
<li>Audit and compliance automation</li>
</ul>

<h3>11. DevSecOps Automation Tools</h3>
<p>
This module introduces popular DevSecOps tools used for automation and security integration.
</p>

<ul>
<li>Jenkins and GitHub Actions</li>
<li>SonarQube for code analysis</li>
<li>Docker and Kubernetes security tools</li>
<li>Security scanning tools</li>
<li>Infrastructure automation tools</li>
</ul>

<h3>12. Real-World DevSecOps Projects</h3>
<p>
Students will build practical projects to apply DevSecOps concepts in real-world scenarios.
</p>

<ul>
<li>Building a secure CI/CD pipeline</li>
<li>Container security implementation</li>
<li>Automated vulnerability scanning system</li>
<li>Secure cloud deployment pipeline</li>
<li>Monitoring and alerting system</li>
</ul>

<h3>13. Career Opportunities in DevSecOps</h3>
<p>
DevSecOps professionals are highly demanded across industries due to the growing need 
for secure software development and cloud infrastructure.
</p>

<ul>
<li>DevSecOps Engineer</li>
<li>Cloud Security Engineer</li>
<li>Application Security Engineer</li>
<li>Security Automation Engineer</li>
<li>Cybersecurity Engineer</li>
</ul>`
        }
    },

    {
        slug: "ci-cd-automation",
        bgImage: CICDAutomation,

        hero: {
            title: "CI/CD",
            highlight: "Automation",
            description: "Automate software delivery pipelines efficiently."
        },
        serviceSection: {
            badgeText: "🚀 CI/CD AUTOMATION",
            heading: "Continuous Integration & Deployment",
            highlightText: "For Faster Releases.",
            descriptionOne:
                "Set up Jenkins and GitHub Actions pipelines.\n" +
                "Automate build and testing processes.\n" +
                "Containerize apps using Docker.\n" +
                "Deploy apps using Kubernetes.\n" +
                "Implement rollback strategies safely.",
            descriptionTwo: `<h2>CI/CD Automation Syllabus</h2>

<p>
Continuous Integration and Continuous Delivery (CI/CD) Automation is a core practice in 
modern DevOps that enables teams to build, test, and deploy software faster and more 
reliably. This course provides a comprehensive understanding of automated pipelines, 
DevOps tools, containerization, and cloud-based deployment strategies used in modern 
software development workflows.
</p>

<h3>1. Introduction to CI/CD</h3>
<p>
This module introduces the concepts of Continuous Integration, Continuous Delivery, 
and Continuous Deployment. Students will understand how automation improves software 
development efficiency and reduces deployment risks.
</p>

<ul>
<li>Overview of DevOps and CI/CD</li>
<li>Benefits of automation in software development</li>
<li>Continuous Integration vs Continuous Delivery</li>
<li>CI/CD lifecycle and workflow</li>
<li>Common CI/CD tools and platforms</li>
</ul>

<h3>2. Version Control Systems</h3>
<p>
Version control is the foundation of CI/CD pipelines. Students will learn how to manage 
code repositories and collaborate effectively using Git.
</p>

<ul>
<li>Introduction to Git</li>
<li>Repository management</li>
<li>Branching and merging strategies</li>
<li>Pull requests and code reviews</li>
<li>GitHub and GitLab workflows</li>
</ul>

<h3>3. Continuous Integration</h3>
<p>
Continuous Integration automates the process of building and testing applications 
whenever code changes are committed.
</p>

<ul>
<li>Automated build processes</li>
<li>Running automated tests</li>
<li>Build servers and agents</li>
<li>Integration with version control systems</li>
<li>CI best practices</li>
</ul>

<h3>4. Continuous Delivery and Deployment</h3>
<p>
This module focuses on delivering software to production environments quickly and 
safely through automated deployment pipelines.
</p>

<ul>
<li>Continuous delivery pipelines</li>
<li>Automated deployment strategies</li>
<li>Blue-green deployment</li>
<li>Canary deployments</li>
<li>Rollback strategies</li>
</ul>

<h3>5. CI/CD Pipeline Tools</h3>
<p>
Students will learn how to build automated pipelines using popular CI/CD tools used 
in the industry.
</p>

<ul>
<li>Jenkins fundamentals</li>
<li>GitHub Actions</li>
<li>GitLab CI/CD</li>
<li>Pipeline configuration and management</li>
<li>Pipeline optimization techniques</li>
</ul>

<h3>6. Containerization and Docker</h3>
<p>
Containers help standardize application environments and simplify deployment processes.
</p>

<ul>
<li>Introduction to containerization</li>
<li>Docker fundamentals</li>
<li>Building Docker images</li>
<li>Docker containers and registries</li>
<li>Docker integration with CI/CD pipelines</li>
</ul>

<h3>7. Kubernetes and Container Orchestration</h3>
<p>
Kubernetes is widely used to manage containerized applications at scale. Students will 
learn how CI/CD pipelines integrate with Kubernetes deployments.
</p>

<ul>
<li>Kubernetes architecture</li>
<li>Pods, services, and deployments</li>
<li>Container orchestration concepts</li>
<li>Kubernetes deployment strategies</li>
<li>CI/CD integration with Kubernetes</li>
</ul>

<h3>8. Infrastructure as Code</h3>
<p>
Infrastructure as Code allows teams to automate infrastructure provisioning and 
configuration management.
</p>

<ul>
<li>Introduction to Infrastructure as Code</li>
<li>Terraform fundamentals</li>
<li>Infrastructure automation</li>
<li>Configuration management</li>
<li>Infrastructure version control</li>
</ul>

<h3>9. Monitoring and Logging</h3>
<p>
Monitoring tools ensure that applications perform efficiently and help detect 
issues during deployments.
</p>

<ul>
<li>Application monitoring tools</li>
<li>Log management systems</li>
<li>Performance monitoring</li>
<li>Alerting and notification systems</li>
<li>CI/CD pipeline monitoring</li>
</ul>

<h3>10. Security in CI/CD Pipelines</h3>
<p>
Security is an important part of automated pipelines. Students will learn how to 
protect code, pipelines, and deployment environments.
</p>

<ul>
<li>Secure pipeline configuration</li>
<li>Secrets management</li>
<li>Vulnerability scanning</li>
<li>Access control and permissions</li>
<li>Secure deployment practices</li>
</ul>

<h3>11. Cloud-Based CI/CD</h3>
<p>
This module focuses on building and deploying CI/CD pipelines using cloud platforms.
</p>

<ul>
<li>CI/CD pipelines on AWS</li>
<li>CI/CD pipelines on Azure</li>
<li>CI/CD pipelines on Google Cloud</li>
<li>Cloud deployment strategies</li>
<li>Serverless deployments</li>
</ul>

<h3>12. Real-World CI/CD Projects</h3>
<p>
Students will work on practical projects to build and manage complete CI/CD pipelines.
</p>

<ul>
<li>Automated build and deployment pipeline</li>
<li>Docker-based CI/CD workflow</li>
<li>Kubernetes application deployment</li>
<li>Cloud-based CI/CD implementation</li>
<li>Monitoring and logging pipeline</li>
</ul>

<h3>13. Career Opportunities in CI/CD Automation</h3>
<p>
CI/CD automation skills are highly valued in DevOps and cloud engineering roles.
</p>

<ul>
<li>DevOps Engineer</li>
<li>Automation Engineer</li>
<li>Cloud Engineer</li>
<li>Platform Engineer</li>
<li>Site Reliability Engineer (SRE)</li>
</ul>`
        }
    },

    // ================= FULL STACK =================

    {
        slug: "mern-stack",
                bgImage: REACTimg,

        hero: {
            title: "Full Stack",
            highlight: "MERN Stack",
            description: "Build scalable web apps using MongoDB, Express, React and Node."
        },
        serviceSection: {
            badgeText: "💻 MERN STACK",
            heading: "Modern JavaScript Development",
            highlightText: "For Scalable Applications.",
            descriptionOne:
                "Build REST APIs using Node.js.\n" +
                "Design MongoDB schemas efficiently.\n" +
                "Develop responsive UI using React.\n" +
                "Implement JWT authentication.\n" +
                "Deploy full-stack applications.",
            descriptionTwo: `<h2>MERN Stack Development Syllabus</h2>

<p>
The MERN Stack Development course provides a complete understanding of modern web 
application development using MongoDB, Express.js, React.js, and Node.js. This course 
covers both front-end and back-end development, enabling students to build scalable, 
dynamic, and full-stack web applications using JavaScript technologies.
</p>

<h3>1. Introduction to Web Development</h3>
<p>
This module introduces the fundamentals of web development and explains how modern 
web applications are built using full-stack technologies.
</p>

<ul>
<li>Overview of web development</li>
<li>Client-side vs server-side development</li>
<li>Understanding the MERN stack architecture</li>
<li>Setting up development environments</li>
<li>Introduction to JavaScript ecosystem</li>
</ul>

<h3>2. HTML, CSS, and Responsive Design</h3>
<p>
Students will learn the basics of building responsive and user-friendly web interfaces 
using HTML and CSS.
</p>

<ul>
<li>HTML structure and semantic elements</li>
<li>CSS styling fundamentals</li>
<li>Responsive web design</li>
<li>Flexbox and CSS Grid</li>
<li>Bootstrap and modern UI frameworks</li>
</ul>

<h3>3. JavaScript Fundamentals</h3>
<p>
JavaScript is the core language used throughout the MERN stack. This module focuses 
on the essential concepts required for modern JavaScript development.
</p>

<ul>
<li>Variables, data types, and operators</li>
<li>Functions and scope</li>
<li>Arrays and objects</li>
<li>DOM manipulation</li>
<li>ES6+ features and modern JavaScript syntax</li>
</ul>

<h3>4. React.js Front-End Development</h3>
<p>
React is a powerful JavaScript library for building interactive user interfaces. 
Students will learn how to create dynamic and component-based web applications.
</p>

<ul>
<li>Introduction to React</li>
<li>JSX and component architecture</li>
<li>Functional components and hooks</li>
<li>State management with useState and useEffect</li>
<li>React Router for navigation</li>
<li>Forms and event handling</li>
</ul>

<h3>5. Advanced React Development</h3>
<p>
This module focuses on advanced React concepts used to build scalable and maintainable 
front-end applications.
</p>

<ul>
<li>Context API</li>
<li>State management with Redux</li>
<li>Code splitting and lazy loading</li>
<li>Performance optimization techniques</li>
<li>API integration with Axios and Fetch</li>
</ul>

<h3>6. Node.js Back-End Development</h3>
<p>
Node.js allows developers to build scalable server-side applications using JavaScript. 
Students will learn how to create backend services and APIs.
</p>

<ul>
<li>Introduction to Node.js</li>
<li>Node.js architecture and event loop</li>
<li>Building HTTP servers</li>
<li>Working with file systems</li>
<li>Package management using npm</li>
</ul>

<h3>7. Express.js Framework</h3>
<p>
Express.js is a minimal and flexible Node.js framework used to build APIs and backend 
services efficiently.
</p>

<ul>
<li>Setting up Express applications</li>
<li>Routing and middleware</li>
<li>Building RESTful APIs</li>
<li>Request and response handling</li>
<li>Error handling and validation</li>
</ul>

<h3>8. MongoDB Database</h3>
<p>
MongoDB is a NoSQL database used for storing and managing application data.
</p>

<ul>
<li>Introduction to MongoDB</li>
<li>Database design and collections</li>
<li>CRUD operations</li>
<li>Indexing and performance optimization</li>
<li>Using MongoDB with Mongoose</li>
</ul>

<h3>9. Authentication and Security</h3>
<p>
This module focuses on implementing authentication and securing web applications.
</p>

<ul>
<li>User authentication systems</li>
<li>JWT authentication</li>
<li>Password hashing and encryption</li>
<li>Access control and authorization</li>
<li>Protecting APIs and applications</li>
</ul>

<h3>10. REST API Development</h3>
<p>
Students will learn how to design and build scalable REST APIs used by front-end 
applications.
</p>

<ul>
<li>REST API design principles</li>
<li>API endpoints and routing</li>
<li>Request validation and error handling</li>
<li>API documentation</li>
<li>Testing APIs</li>
</ul>

<h3>11. Deployment and DevOps Basics</h3>
<p>
This module focuses on deploying full-stack applications to production environments.
</p>

<ul>
<li>Application deployment strategies</li>
<li>Hosting MERN applications</li>
<li>Using cloud platforms</li>
<li>Environment configuration</li>
<li>Basic CI/CD integration</li>
</ul>

<h3>12. Real-World MERN Projects</h3>
<p>
Students will build complete full-stack applications to apply their knowledge in 
real-world scenarios.
</p>

<ul>
<li>E-commerce web application</li>
<li>Task management system</li>
<li>Authentication-based dashboard</li>
<li>Blog or content management system</li>
<li>REST API with full CRUD functionality</li>
</ul>

<h3>13. Career Opportunities in MERN Development</h3>
<p>
The course concludes with career guidance and industry insights for full-stack 
JavaScript developers.
</p>

<ul>
<li>Full Stack Developer</li>
<li>Front-End Developer</li>
<li>Back-End Developer</li>
<li>JavaScript Developer</li>
<li>Web Application Engineer</li>
</ul>`
        }
    },

    {
        slug: "mean-stack",
                bgImage: ANGULAR,

        hero: {
            title: "Full Stack",
            highlight: "MEAN Stack",
            description: "Build Angular-based full-stack applications."
        },
        serviceSection: {
            badgeText: "💻 MEAN STACK",
            heading: "Angular & Node Ecosystem",
            highlightText: "For Enterprise Apps.",
            descriptionOne:
                "Develop Angular frontends professionally.\n" +
                "Build backend using Node & Express.\n" +
                "Manage MongoDB databases.\n" +
                "Create RESTful services.\n" +
                "Implement authentication and authorization.",
            descriptionTwo: `<h2>MERN Stack Development Syllabus</h2>

<p>
The MERN Stack Development course provides a complete understanding of modern web 
application development using MongoDB, Express.js, React.js, and Node.js. This course 
covers both front-end and back-end development, enabling students to build scalable, 
dynamic, and full-stack web applications using JavaScript technologies.
</p>

<h3>1. Introduction to Web Development</h3>
<p>
This module introduces the fundamentals of web development and explains how modern 
web applications are built using full-stack technologies.
</p>

<ul>
<li>Overview of web development</li>
<li>Client-side vs server-side development</li>
<li>Understanding the MERN stack architecture</li>
<li>Setting up development environments</li>
<li>Introduction to JavaScript ecosystem</li>
</ul>

<h3>2. HTML, CSS, and Responsive Design</h3>
<p>
Students will learn the basics of building responsive and user-friendly web interfaces 
using HTML and CSS.
</p>

<ul>
<li>HTML structure and semantic elements</li>
<li>CSS styling fundamentals</li>
<li>Responsive web design</li>
<li>Flexbox and CSS Grid</li>
<li>Bootstrap and modern UI frameworks</li>
</ul>

<h3>3. JavaScript Fundamentals</h3>
<p>
JavaScript is the core language used throughout the MERN stack. This module focuses 
on the essential concepts required for modern JavaScript development.
</p>

<ul>
<li>Variables, data types, and operators</li>
<li>Functions and scope</li>
<li>Arrays and objects</li>
<li>DOM manipulation</li>
<li>ES6+ features and modern JavaScript syntax</li>
</ul>

<h3>4. React.js Front-End Development</h3>
<p>
React is a powerful JavaScript library for building interactive user interfaces. 
Students will learn how to create dynamic and component-based web applications.
</p>

<ul>
<li>Introduction to React</li>
<li>JSX and component architecture</li>
<li>Functional components and hooks</li>
<li>State management with useState and useEffect</li>
<li>React Router for navigation</li>
<li>Forms and event handling</li>
</ul>

<h3>5. Advanced React Development</h3>
<p>
This module focuses on advanced React concepts used to build scalable and maintainable 
front-end applications.
</p>

<ul>
<li>Context API</li>
<li>State management with Redux</li>
<li>Code splitting and lazy loading</li>
<li>Performance optimization techniques</li>
<li>API integration with Axios and Fetch</li>
</ul>

<h3>6. Node.js Back-End Development</h3>
<p>
Node.js allows developers to build scalable server-side applications using JavaScript. 
Students will learn how to create backend services and APIs.
</p>

<ul>
<li>Introduction to Node.js</li>
<li>Node.js architecture and event loop</li>
<li>Building HTTP servers</li>
<li>Working with file systems</li>
<li>Package management using npm</li>
</ul>

<h3>7. Express.js Framework</h3>
<p>
Express.js is a minimal and flexible Node.js framework used to build APIs and backend 
services efficiently.
</p>

<ul>
<li>Setting up Express applications</li>
<li>Routing and middleware</li>
<li>Building RESTful APIs</li>
<li>Request and response handling</li>
<li>Error handling and validation</li>
</ul>

<h3>8. MongoDB Database</h3>
<p>
MongoDB is a NoSQL database used for storing and managing application data.
</p>

<ul>
<li>Introduction to MongoDB</li>
<li>Database design and collections</li>
<li>CRUD operations</li>
<li>Indexing and performance optimization</li>
<li>Using MongoDB with Mongoose</li>
</ul>

<h3>9. Authentication and Security</h3>
<p>
This module focuses on implementing authentication and securing web applications.
</p>

<ul>
<li>User authentication systems</li>
<li>JWT authentication</li>
<li>Password hashing and encryption</li>
<li>Access control and authorization</li>
<li>Protecting APIs and applications</li>
</ul>

<h3>10. REST API Development</h3>
<p>
Students will learn how to design and build scalable REST APIs used by front-end 
applications.
</p>

<ul>
<li>REST API design principles</li>
<li>API endpoints and routing</li>
<li>Request validation and error handling</li>
<li>API documentation</li>
<li>Testing APIs</li>
</ul>

<h3>11. Deployment and DevOps Basics</h3>
<p>
This module focuses on deploying full-stack applications to production environments.
</p>

<ul>
<li>Application deployment strategies</li>
<li>Hosting MERN applications</li>
<li>Using cloud platforms</li>
<li>Environment configuration</li>
<li>Basic CI/CD integration</li>
</ul>

<h3>12. Real-World MERN Projects</h3>
<p>
Students will build complete full-stack applications to apply their knowledge in 
real-world scenarios.
</p>

<ul>
<li>E-commerce web application</li>
<li>Task management system</li>
<li>Authentication-based dashboard</li>
<li>Blog or content management system</li>
<li>REST API with full CRUD functionality</li>
</ul>

<h3>13. Career Opportunities in MERN Development</h3>
<p>
The course concludes with career guidance and industry insights for full-stack 
JavaScript developers.
</p>

<ul>
<li>Full Stack Developer</li>
<li>Front-End Developer</li>
<li>Back-End Developer</li>
<li>JavaScript Developer</li>
<li>Web Application Engineer</li>
</ul>`
        }
    },

    {
        slug: "full-stack-java",
bgImage: JAVAimg,
        hero: {        

            title: "Enterprise",
            highlight: "Full Stack Java",
            description: "Develop enterprise-grade applications using Java."
        },
        serviceSection: {
            badgeText: "☕ FULL STACK JAVA",
            heading: "Spring Boot & Modern Frontend",
            highlightText: "For Enterprise Systems.",
            descriptionOne:
                "Develop backend APIs using Spring Boot.\n" +
                "Manage relational databases efficiently.\n" +
                "Build secure authentication systems.\n" +
                "Integrate frontend frameworks.\n" +
                "Implement microservices architecture.",
            descriptionTwo: `<h2>Full Stack Java Development Syllabus</h2>

<p>
The Full Stack Java Development course provides a comprehensive understanding of building 
end-to-end web applications using Java technologies. This course covers front-end 
development, back-end programming, database management, and enterprise frameworks such 
as Spring and Spring Boot, enabling students to develop scalable and secure web applications.
</p>

<h3>1. Introduction to Full Stack Development</h3>
<p>
This module introduces the fundamentals of full stack development and explains how 
modern web applications are built using front-end and back-end technologies.
</p>

<ul>
<li>Overview of full stack development</li>
<li>Client-server architecture</li>
<li>Understanding web application workflows</li>
<li>Development tools and environments</li>
<li>Introduction to Java ecosystem</li>
</ul>

<h3>2. HTML, CSS, and Responsive Web Design</h3>
<p>
Students will learn how to design responsive and user-friendly interfaces using 
modern web technologies.
</p>

<ul>
<li>HTML structure and semantic elements</li>
<li>CSS styling fundamentals</li>
<li>Responsive web design techniques</li>
<li>Flexbox and CSS Grid</li>
<li>Bootstrap framework</li>
</ul>

<h3>3. JavaScript Fundamentals</h3>
<p>
JavaScript enhances web pages with dynamic behavior and interactive features.
</p>

<ul>
<li>JavaScript syntax and data types</li>
<li>Functions and control structures</li>
<li>DOM manipulation</li>
<li>Event handling</li>
<li>Modern ES6+ features</li>
</ul>

<h3>4. Core Java Programming</h3>
<p>
Core Java forms the foundation of backend development in Java-based applications.
</p>

<ul>
<li>Java syntax and programming concepts</li>
<li>Object-Oriented Programming principles</li>
<li>Classes, objects, and inheritance</li>
<li>Exception handling</li>
<li>Collections framework</li>
</ul>

<h3>5. Advanced Java Concepts</h3>
<p>
This module focuses on advanced programming concepts required for enterprise-level applications.
</p>

<ul>
<li>Multithreading and concurrency</li>
<li>File handling</li>
<li>Java input and output streams</li>
<li>Networking basics</li>
<li>Java annotations</li>
</ul>

<h3>6. Database Management and SQL</h3>
<p>
Students will learn how to design and manage databases used in enterprise applications.
</p>

<ul>
<li>Introduction to relational databases</li>
<li>SQL queries and database operations</li>
<li>Joins and indexing</li>
<li>Database design principles</li>
<li>Database connectivity with JDBC</li>
</ul>

<h3>7. Servlets and JSP</h3>
<p>
This module introduces Java-based web technologies used to build dynamic web applications.
</p>

<ul>
<li>Introduction to Servlets</li>
<li>Handling HTTP requests and responses</li>
<li>Session management</li>
<li>JavaServer Pages (JSP)</li>
<li>MVC architecture</li>
</ul>

<h3>8. Spring Framework</h3>
<p>
Spring Framework simplifies enterprise Java development by providing powerful tools 
for dependency management and application configuration.
</p>

<ul>
<li>Introduction to Spring Framework</li>
<li>Dependency Injection</li>
<li>Spring configuration and beans</li>
<li>Spring MVC architecture</li>
<li>RESTful web services with Spring</li>
</ul>

<h3>9. Spring Boot Development</h3>
<p>
Spring Boot simplifies the process of building production-ready Java applications.
</p>

<ul>
<li>Spring Boot architecture</li>
<li>Creating REST APIs</li>
<li>Spring Boot project structure</li>
<li>Database integration with JPA and Hibernate</li>
<li>Application configuration and deployment</li>
</ul>

<h3>10. API Development and Integration</h3>
<p>
Students will learn how to build and integrate REST APIs used by modern web and 
mobile applications.
</p>

<ul>
<li>REST API design principles</li>
<li>JSON data handling</li>
<li>API authentication and authorization</li>
<li>API testing tools</li>
<li>Integration with frontend applications</li>
</ul>

<h3>11. Security in Java Applications</h3>
<p>
Security is an essential component of enterprise applications. This module focuses 
on protecting applications from common vulnerabilities.
</p>

<ul>
<li>Authentication and authorization</li>
<li>Spring Security basics</li>
<li>Password encryption</li>
<li>Secure API development</li>
<li>Preventing common security threats</li>
</ul>

<h3>12. Deployment and DevOps Basics</h3>
<p>
Students will learn how to deploy Java applications to production environments.
</p>

<ul>
<li>Application packaging and deployment</li>
<li>Using application servers</li>
<li>Introduction to Docker</li>
<li>Cloud deployment basics</li>
<li>CI/CD integration</li>
</ul>

<h3>13. Real-World Full Stack Java Projects</h3>
<p>
Students will develop complete full-stack applications to apply their knowledge 
in real-world scenarios.
</p>

<ul>
<li>E-commerce application</li>
<li>Online booking system</li>
<li>Employee management system</li>
<li>Authentication-based web application</li>
<li>REST API-based enterprise application</li>
</ul>

<h3>14. Career Opportunities in Java Development</h3>
<p>
Java remains one of the most widely used programming languages in enterprise software 
development.
</p>

<ul>
<li>Java Developer</li>
<li>Full Stack Java Developer</li>
<li>Backend Developer</li>
<li>Spring Boot Developer</li>
<li>Enterprise Application Developer</li>
</ul>`
        }
    },

    {
        slug: "full-stack-python",
                bgImage: PYTHONimg,

        hero: {
            title: "Professional",
            highlight: "Full Stack Python",
            description: "Build scalable web applications using Python."
        },
        serviceSection: {
            badgeText: "🐍 FULL STACK PYTHON",
            heading: "Django & Flask Development",
            highlightText: "For Modern Web Apps.",
            descriptionOne:
                "Develop REST APIs using Django.\n" +
                "Implement authentication securely.\n" +
                "Work with relational databases.\n" +
                "Build scalable backend systems.\n" +
                "Integrate frontend technologies.",
            descriptionTwo: `<h2>Full Stack Python Development Syllabus</h2>

<p>
The Full Stack Python Development course provides comprehensive training in building 
modern web applications using Python for backend development and modern front-end 
technologies. This course covers front-end development, Python programming, web 
frameworks, database management, REST API development, and deployment practices 
used in real-world software applications.
</p>

<h3>1. Introduction to Full Stack Development</h3>
<p>
This module introduces the fundamentals of full stack development and explains how 
modern web applications are structured using front-end and back-end technologies.
</p>

<ul>
<li>Overview of full stack development</li>
<li>Client-server architecture</li>
<li>Understanding web application workflows</li>
<li>Development tools and environments</li>
<li>Introduction to Python ecosystem</li>
</ul>

<h3>2. HTML, CSS, and Responsive Design</h3>
<p>
Students will learn how to create visually appealing and responsive web interfaces 
using modern front-end technologies.
</p>

<ul>
<li>HTML structure and semantic elements</li>
<li>CSS styling fundamentals</li>
<li>Responsive web design techniques</li>
<li>Flexbox and CSS Grid</li>
<li>Bootstrap framework</li>
</ul>

<h3>3. JavaScript Fundamentals</h3>
<p>
JavaScript is used to add interactivity and dynamic behavior to web pages.
</p>

<ul>
<li>JavaScript syntax and data types</li>
<li>Functions and control structures</li>
<li>DOM manipulation</li>
<li>Event handling</li>
<li>Modern ES6+ JavaScript features</li>
</ul>

<h3>4. Python Programming Fundamentals</h3>
<p>
Python serves as the core backend programming language in this course. Students 
will learn the fundamentals of Python programming.
</p>

<ul>
<li>Python syntax and data types</li>
<li>Control structures and loops</li>
<li>Functions and modules</li>
<li>Object-Oriented Programming in Python</li>
<li>Error handling and debugging</li>
</ul>

<h3>5. Advanced Python Programming</h3>
<p>
This module focuses on advanced Python concepts used in professional software 
development.
</p>

<ul>
<li>File handling</li>
<li>Working with APIs</li>
<li>Python packages and virtual environments</li>
<li>Multithreading and multiprocessing</li>
<li>Performance optimization techniques</li>
</ul>

<h3>6. Database Management</h3>
<p>
Students will learn how to design and manage databases used in web applications.
</p>

<ul>
<li>Introduction to relational databases</li>
<li>SQL queries and operations</li>
<li>Database design principles</li>
<li>Working with PostgreSQL and MySQL</li>
<li>Database connectivity with Python</li>
</ul>

<h3>7. Django Web Framework</h3>
<p>
Django is one of the most popular Python frameworks used for building scalable 
web applications quickly.
</p>

<ul>
<li>Introduction to Django</li>
<li>Project and application structure</li>
<li>Models, views, and templates</li>
<li>Django ORM</li>
<li>Form handling and validation</li>
</ul>

<h3>8. REST API Development with Django REST Framework</h3>
<p>
Students will learn how to build RESTful APIs used by modern web and mobile applications.
</p>

<ul>
<li>REST API fundamentals</li>
<li>Creating APIs using Django REST Framework</li>
<li>Serialization and validation</li>
<li>Authentication and permissions</li>
<li>API testing and documentation</li>
</ul>

<h3>9. Authentication and Security</h3>
<p>
This module focuses on implementing secure authentication systems in web applications.
</p>

<ul>
<li>User authentication systems</li>
<li>JWT authentication</li>
<li>Password hashing and encryption</li>
<li>Role-based access control</li>
<li>Protecting APIs and applications</li>
</ul>

<h3>10. Front-End Integration</h3>
<p>
Students will learn how to integrate backend APIs with modern front-end interfaces.
</p>

<ul>
<li>API integration with JavaScript</li>
<li>Handling asynchronous requests</li>
<li>Dynamic UI updates</li>
<li>Form handling and validation</li>
<li>Building interactive web applications</li>
</ul>

<h3>11. Deployment and Cloud Basics</h3>
<p>
This module focuses on deploying full stack Python applications to production environments.
</p>

<ul>
<li>Application deployment strategies</li>
<li>Using cloud hosting platforms</li>
<li>Environment configuration</li>
<li>Docker containerization basics</li>
<li>CI/CD integration</li>
</ul>

<h3>12. Real-World Full Stack Python Projects</h3>
<p>
Students will develop practical projects to gain hands-on experience building full stack 
applications.
</p>

<ul>
<li>E-commerce web application</li>
<li>Authentication-based dashboard</li>
<li>Blog or CMS system</li>
<li>REST API with CRUD operations</li>
<li>Full stack social media application</li>
</ul>

<h3>13. Career Opportunities in Python Development</h3>
<p>
Python developers are highly demanded across industries due to Python’s versatility 
and strong ecosystem.
</p>

<ul>
<li>Python Developer</li>
<li>Full Stack Python Developer</li>
<li>Django Developer</li>
<li>Backend Developer</li>
<li>Software Engineer</li>
</ul>`
        }
    },

    {
        slug: "dotnet-php",
                bgImage: NETimg,

        hero: {
            title: ".NET &",
            highlight: "PHP Development",
            description: "Build enterprise applications using .NET and PHP."
        },
        serviceSection: {
            badgeText: "🖥 .NET & PHP",
            heading: "Enterprise Backend Systems",
            highlightText: "With Modern Frameworks.",
            descriptionOne:
                "Develop apps using ASP.NET Core.\n" +
                "Build backend systems with Laravel.\n" +
                "Implement secure authentication.\n" +
                "Manage relational databases.\n" +
                "Develop scalable APIs.",
            descriptionTwo: `<p>
The <strong>.NET & PHP Development program</strong> is designed to help learners
build dynamic, scalable, and high-performance web applications using two of
the most widely used backend technologies in the industry. Both .NET and PHP
are powerful platforms used for developing enterprise applications, web
services, and large-scale business systems.
</p>

<p>
This course introduces students to the fundamentals of server-side development,
database connectivity, application architecture, and secure web application
design. Learners will gain practical experience building real-world
applications using modern frameworks and development practices.
</p>

<h4>.NET Development Fundamentals</h4>
<p>
The .NET framework is widely used for building enterprise-level applications.
Students will learn how to develop web applications using Microsoft's
powerful development ecosystem.
</p>

<ul>
<li>C# Programming Fundamentals</li>
<li>.NET Framework and .NET Core Introduction</li>
<li>ASP.NET Web Application Development</li>
<li>MVC Architecture</li>
<li>Building RESTful APIs with ASP.NET</li>
<li>Authentication and Authorization</li>
</ul>

<h4>PHP Web Development</h4>
<p>
PHP remains one of the most widely used server-side languages for building
dynamic websites and web applications. Students will learn how to build
powerful backend systems using PHP and modern frameworks.
</p>

<ul>
<li>PHP Programming Fundamentals</li>
<li>Server-Side Web Development</li>
<li>Handling Forms and User Input</li>
<li>Session and Cookie Management</li>
<li>Working with PHP Frameworks</li>
<li>Building Secure Web Applications</li>
</ul>

<h4>Database Integration</h4>
<p>
Modern applications rely heavily on database systems. Students will learn
how to connect applications with databases to manage and process data
efficiently.
</p>

<ul>
<li>MySQL Database Fundamentals</li>
<li>Database Connectivity with .NET and PHP</li>
<li>CRUD Operations</li>
<li>Query Optimization</li>
<li>Data Security and Validation</li>
</ul>

<h4>Web Application Architecture</h4>
<p>
Understanding application architecture is essential for building scalable
and maintainable software systems. This module focuses on structured
development practices and software design patterns.
</p>

<ul>
<li>Model-View-Controller (MVC) Architecture</li>
<li>Layered Application Design</li>
<li>API Development and Integration</li>
<li>Error Handling and Logging</li>
<li>Application Performance Optimization</li>
</ul>

<h4>Security & Best Practices</h4>
<p>
Security is a critical part of backend development. Students will learn
how to protect web applications against common vulnerabilities and ensure
secure communication between systems.
</p>

<ul>
<li>Input Validation and Data Sanitization</li>
<li>Authentication and Access Control</li>
<li>Protection Against SQL Injection</li>
<li>Secure API Development</li>
<li>Application Security Best Practices</li>
</ul>

<h4>Deployment & Hosting</h4>
<p>
Students will also learn how to deploy and manage web applications on
servers and cloud platforms. Understanding deployment processes ensures
applications run efficiently in production environments.
</p>

<ul>
<li>Application Deployment Strategies</li>
<li>Server Configuration</li>
<li>Hosting Web Applications</li>
<li>Environment Setup and Configuration</li>
<li>Application Maintenance and Updates</li>
</ul>

<h4>Real-World Projects</h4>
<p>
The course includes practical projects where students will build complete
web applications using .NET and PHP technologies. These projects help
learners gain real development experience and build a professional portfolio.
</p>

<ul>
<li>Dynamic Website Development</li>
<li>REST API Based Application</li>
<li>Authentication and User Management System</li>
<li>Database Driven Web Application</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue roles such as
<strong>.NET Developer, PHP Developer, Backend Developer,
Web Application Developer, or Software Engineer</strong>.
These roles are highly demanded in enterprise software companies,
web development agencies, and product-based organizations.
</p>

<p>
By mastering .NET and PHP development, students will gain the ability
to build secure, scalable, and efficient backend systems that power
modern web applications and digital platforms.
</p>`
        }
    },

    // ================= MOBILE =================

    {
        slug: "android-development",
                bgImage: ANDROIDimg,

        hero: { title: "Android", highlight: "Java & Kotlin", description: "Build native Android apps." },
        serviceSection: {
            badgeText: "📱 ANDROID DEVELOPMENT",
            heading: "Native Android Apps",
            highlightText: "Using Modern Tools.",
            descriptionOne:
                "Develop apps using Kotlin and Java.\n" +
                "Build responsive mobile UI.\n" +
                "Integrate REST APIs.\n" +
                "Handle offline storage.\n" +
                "Deploy apps to Play Store.",
            descriptionTwo: `<h2>Android Development Syllabus</h2>

<p>
The Android Development course provides comprehensive training in building modern 
mobile applications for the Android platform. Students will learn how to design, 
develop, test, and deploy mobile applications using Android Studio, Java/Kotlin, 
and modern Android frameworks. The course focuses on both fundamental concepts and 
real-world application development.
</p>

<h3>1. Introduction to Android Development</h3>
<p>
This module introduces the Android ecosystem and the tools required for Android 
application development.
</p>

<ul>
<li>Overview of Android platform</li>
<li>Android architecture and components</li>
<li>Installing Android Studio</li>
<li>Android project structure</li>
<li>Understanding the Android SDK</li>
</ul>

<h3>2. Programming Fundamentals for Android</h3>
<p>
Students will learn the programming concepts required for Android development using 
Java or Kotlin.
</p>

<ul>
<li>Java/Kotlin programming basics</li>
<li>Object-Oriented Programming concepts</li>
<li>Classes and objects</li>
<li>Exception handling</li>
<li>Working with collections</li>
</ul>

<h3>3. Android User Interface Design</h3>
<p>
This module focuses on designing responsive and interactive user interfaces for 
Android applications.
</p>

<ul>
<li>XML layouts and UI components</li>
<li>Buttons, text views, and input fields</li>
<li>RecyclerView and list views</li>
<li>Material Design principles</li>
<li>Responsive layouts and screen sizes</li>
</ul>

<h3>4. Activities and Intents</h3>
<p>
Activities and intents are the core components used for navigation and interaction 
within Android applications.
</p>

<ul>
<li>Activity lifecycle</li>
<li>Explicit and implicit intents</li>
<li>Navigation between screens</li>
<li>Passing data between activities</li>
<li>Handling user interactions</li>
</ul>

<h3>5. Data Storage and Persistence</h3>
<p>
Students will learn how to store and manage data within Android applications.
</p>

<ul>
<li>SharedPreferences</li>
<li>SQLite database</li>
<li>Room database library</li>
<li>File storage and data management</li>
<li>Working with external storage</li>
</ul>

<h3>6. Networking and API Integration</h3>
<p>
Modern mobile applications interact with remote servers and APIs.
</p>

<ul>
<li>REST API fundamentals</li>
<li>HTTP requests and responses</li>
<li>Using Retrofit and Volley</li>
<li>JSON data parsing</li>
<li>Handling asynchronous operations</li>
</ul>

<h3>7. Android Architecture Components</h3>
<p>
This module introduces modern Android architecture patterns used to build scalable 
and maintainable applications.
</p>

<ul>
<li>MVVM architecture</li>
<li>ViewModel and LiveData</li>
<li>Data binding</li>
<li>Lifecycle-aware components</li>
<li>Repository pattern</li>
</ul>

<h3>8. Background Processing</h3>
<p>
Students will learn how to perform tasks in the background without blocking the 
user interface.
</p>

<ul>
<li>AsyncTask and threading</li>
<li>WorkManager</li>
<li>Services and background tasks</li>
<li>Handling long-running operations</li>
</ul>

<h3>9. Firebase Integration</h3>
<p>
Firebase provides powerful backend services for Android applications.
</p>

<ul>
<li>Firebase project setup</li>
<li>Firebase authentication</li>
<li>Cloud Firestore database</li>
<li>Push notifications using Firebase Cloud Messaging</li>
<li>Firebase analytics</li>
</ul>

<h3>10. App Security and Performance</h3>
<p>
Security and performance optimization are essential for building reliable Android apps.
</p>

<ul>
<li>Secure data storage</li>
<li>Authentication and authorization</li>
<li>Application performance optimization</li>
<li>Debugging and profiling</li>
<li>Handling application errors</li>
</ul>

<h3>11. Testing and Debugging</h3>
<p>
Testing ensures application stability and functionality before deployment.
</p>

<ul>
<li>Unit testing</li>
<li>UI testing</li>
<li>Debugging Android applications</li>
<li>Using Android Studio debugging tools</li>
</ul>

<h3>12. Publishing Android Applications</h3>
<p>
Students will learn how to prepare and publish Android applications to the Google 
Play Store.
</p>

<ul>
<li>Generating signed APKs</li>
<li>Application versioning</li>
<li>Google Play Store submission process</li>
<li>App store optimization</li>
</ul>

<h3>13. Real-World Android Projects</h3>
<p>
Students will build practical Android applications to apply their knowledge in 
real-world scenarios.
</p>

<ul>
<li>To-do list application</li>
<li>Weather app with API integration</li>
<li>Chat or messaging application</li>
<li>E-commerce mobile application</li>
<li>Authentication-based mobile app</li>
</ul>

<h3>14. Career Opportunities in Android Development</h3>
<p>
Android developers are in high demand as mobile applications continue to dominate 
the digital ecosystem.
</p>

<ul>
<li>Android Developer</li>
<li>Mobile App Developer</li>
<li>Software Engineer</li>
<li>Mobile Application Architect</li>
<li>Cross-platform developer</li>
</ul>`
        }
    },

    {
        slug: "ios-development",
                bgImage: SWIFT,

        hero: { title: "iOS", highlight: "Swift", description: "Build powerful iOS apps." },
        serviceSection: {
            badgeText: "🍎 IOS DEVELOPMENT",
            heading: "Swift App Development",
            highlightText: "For iPhone & iPad.",
            descriptionOne:
                "Develop apps using Swift.\n" +
                "Build intuitive UI with SwiftUI.\n" +
                "Integrate APIs and services.\n" +
                "Manage data persistence.\n" +
                "Deploy apps to App Store.",
            descriptionTwo: `<p>
The <strong>iOS Development program</strong> is designed to help learners
build powerful, high-performance mobile applications for Apple devices
such as iPhone and iPad. With millions of users worldwide, the Apple
ecosystem offers exciting opportunities for developers to create
innovative and user-friendly mobile applications.
</p>

<p>
This course introduces the complete iOS application development
lifecycle, from designing beautiful user interfaces to building
fully functional applications and publishing them on the Apple App Store.
Students will gain hands-on experience with modern development tools,
frameworks, and best practices used by professional iOS developers.
</p>

<h4>iOS Development Fundamentals</h4>
<p>
Students begin by learning the core concepts of mobile application
development within the Apple ecosystem. This includes understanding
the iOS architecture, application lifecycle, and development environment.
</p>

<ul>
<li>Introduction to iOS Application Development</li>
<li>Understanding the Apple Ecosystem</li>
<li>Xcode Development Environment</li>
<li>App Architecture and Design Patterns</li>
<li>iOS Application Lifecycle</li>
</ul>

<h4>Swift Programming</h4>
<p>
Swift is the primary programming language used for developing modern
iOS applications. Students will learn the syntax, concepts, and
advanced features of Swift for building efficient and maintainable apps.
</p>

<ul>
<li>Swift Programming Fundamentals</li>
<li>Object-Oriented Programming Concepts</li>
<li>Data Structures and Collections</li>
<li>Error Handling and Memory Management</li>
<li>Writing Clean and Efficient Code</li>
</ul>

<h4>User Interface Design</h4>
<p>
Designing intuitive and visually appealing interfaces is a key part
of iOS development. Students will learn how to create responsive and
interactive user interfaces following Apple’s design guidelines.
</p>

<ul>
<li>Storyboards and Interface Builder</li>
<li>Auto Layout and Responsive Design</li>
<li>Navigation Controllers and Tab Bars</li>
<li>UI Components and Custom Views</li>
<li>Apple Human Interface Guidelines</li>
</ul>

<h4>App Functionality & Features</h4>
<p>
Modern mobile applications include multiple advanced features.
Students will learn how to implement essential functionality that
enhances user experience and application performance.
</p>

<ul>
<li>API Integration and Networking</li>
<li>Local Data Storage</li>
<li>Push Notifications</li>
<li>Location Services and Maps</li>
<li>Media and Camera Integration</li>
</ul>

<h4>Testing & Debugging</h4>
<p>
Ensuring that applications run smoothly and reliably is critical.
Students will learn debugging techniques and testing strategies
to improve application performance and stability.
</p>

<ul>
<li>Debugging Tools in Xcode</li>
<li>Unit Testing and UI Testing</li>
<li>Performance Optimization</li>
<li>Error Tracking and Bug Fixing</li>
</ul>

<h4>App Deployment & App Store Publishing</h4>
<p>
The program also teaches the complete process of preparing and
publishing applications on the Apple App Store.
</p>

<ul>
<li>Preparing Apps for Production</li>
<li>App Store Guidelines and Policies</li>
<li>Application Signing and Certificates</li>
<li>Submitting Apps to the App Store</li>
<li>Application Updates and Maintenance</li>
</ul>

<h4>Real-World Projects</h4>
<p>
Students will work on real-world mobile application projects to
gain hands-on experience and build a strong development portfolio.
</p>

<ul>
<li>iOS Task Management App</li>
<li>API-Based Mobile Application</li>
<li>User Authentication System</li>
<li>Data Driven Mobile Dashboard</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue careers such as
<strong>iOS Developer, Mobile Application Developer,
Swift Developer, or Software Engineer</strong>.
These roles are highly demanded in product companies,
startups, and mobile app development firms.
</p>

<p>
By mastering iOS development, students will gain the ability
to create innovative mobile applications that deliver
excellent performance, security, and user experience
within the Apple ecosystem.
</p>`
        }
    },

    {
        slug: "flutter-react-native",
        bgImage: FLUTTER,
        hero: { title: "Cross Platform", highlight: "Flutter & React Native", description: "Build cross-platform mobile apps." },
        serviceSection: {
            badgeText: "📲 FLUTTER & REACT NATIVE",
            heading: "Single Codebase Apps",
            highlightText: "For Android & iOS.",
            descriptionOne:
                "Build UI using Flutter widgets.\n" +
                "Develop React Native components.\n" +
                "Integrate backend APIs.\n" +
                "Implement navigation systems.\n" +
                "Manage state effectively.",
            descriptionTwo: `<h2>Flutter & React Native Development Syllabus</h2>

<p>
This course provides comprehensive training in cross-platform mobile application 
development using Flutter and React Native. Students will learn how to build 
high-performance mobile applications for both Android and iOS using a single codebase. 
The course focuses on modern UI design, API integration, state management, and 
real-world mobile app deployment.
</p>

<h3>1. Introduction to Cross-Platform Mobile Development</h3>
<p>
This module introduces the concept of cross-platform development and explains how 
frameworks like Flutter and React Native allow developers to build applications 
for multiple platforms using a single codebase.
</p>

<ul>
<li>Overview of mobile app development</li>
<li>Native vs cross-platform development</li>
<li>Introduction to Flutter and React Native</li>
<li>Development environment setup</li>
<li>Understanding mobile app architecture</li>
</ul>

<h3>2. Programming Fundamentals</h3>
<p>
Students will learn the programming languages used in both frameworks: Dart for 
Flutter and JavaScript for React Native.
</p>

<ul>
<li>Dart programming basics</li>
<li>JavaScript fundamentals</li>
<li>Variables, data types, and functions</li>
<li>Object-oriented programming concepts</li>
<li>Asynchronous programming</li>
</ul>

<h3>3. Flutter Framework Fundamentals</h3>
<p>
Flutter is a UI toolkit developed by Google for building natively compiled 
applications from a single codebase.
</p>

<ul>
<li>Flutter architecture</li>
<li>Widgets and layout system</li>
<li>Stateless and Stateful widgets</li>
<li>Navigation and routing</li>
<li>Material and Cupertino design</li>
</ul>

<h3>4. React Native Fundamentals</h3>
<p>
React Native is a popular framework that enables developers to build mobile 
applications using JavaScript and React.
</p>

<ul>
<li>Introduction to React Native</li>
<li>Components and JSX</li>
<li>React hooks and state management</li>
<li>Navigation and screen management</li>
<li>Styling and UI components</li>
</ul>

<h3>5. UI/UX Design for Mobile Applications</h3>
<p>
This module focuses on designing modern and responsive user interfaces for 
mobile applications.
</p>

<ul>
<li>Mobile UI design principles</li>
<li>Layouts and responsive design</li>
<li>Animations and transitions</li>
<li>Reusable components</li>
<li>User experience optimization</li>
</ul>

<h3>6. API Integration and Networking</h3>
<p>
Mobile applications often interact with remote servers and APIs to fetch 
and store data.
</p>

<ul>
<li>REST API fundamentals</li>
<li>HTTP requests and responses</li>
<li>Fetching data from APIs</li>
<li>JSON parsing</li>
<li>Error handling and data validation</li>
</ul>

<h3>7. State Management</h3>
<p>
Managing application state is critical for building scalable mobile applications.
</p>

<ul>
<li>State management concepts</li>
<li>Provider and Riverpod in Flutter</li>
<li>Redux and Context API in React Native</li>
<li>Application data flow</li>
<li>Managing complex application states</li>
</ul>

<h3>8. Data Storage and Local Databases</h3>
<p>
Students will learn how to store and manage data locally within mobile applications.
</p>

<ul>
<li>Local storage options</li>
<li>SharedPreferences and secure storage</li>
<li>SQLite database integration</li>
<li>Offline data handling</li>
</ul>

<h3>9. Authentication and Security</h3>
<p>
This module focuses on implementing secure authentication systems in mobile applications.
</p>

<ul>
<li>User authentication systems</li>
<li>JWT-based authentication</li>
<li>Secure data storage</li>
<li>Role-based access control</li>
<li>Protecting APIs and user data</li>
</ul>

<h3>10. Firebase Integration</h3>
<p>
Firebase provides backend services that simplify mobile app development.
</p>

<ul>
<li>Firebase project setup</li>
<li>Firebase authentication</li>
<li>Cloud Firestore database</li>
<li>Push notifications using Firebase Cloud Messaging</li>
<li>Firebase analytics</li>
</ul>

<h3>11. Performance Optimization</h3>
<p>
Students will learn techniques to improve application performance and user experience.
</p>

<ul>
<li>Optimizing UI performance</li>
<li>Reducing app size</li>
<li>Handling large datasets</li>
<li>Memory management</li>
<li>Debugging and profiling tools</li>
</ul>

<h3>12. Testing and Debugging</h3>
<p>
Testing ensures application reliability and stability before deployment.
</p>

<ul>
<li>Unit testing</li>
<li>Integration testing</li>
<li>Debugging tools</li>
<li>Error tracking and monitoring</li>
</ul>

<h3>13. App Deployment</h3>
<p>
Students will learn how to build and publish applications for Android and iOS platforms.
</p>

<ul>
<li>Building production-ready applications</li>
<li>Generating APK and IPA files</li>
<li>Publishing apps to Google Play Store</li>
<li>Publishing apps to Apple App Store</li>
</ul>

<h3>14. Real-World Mobile App Projects</h3>
<p>
Students will build real-world mobile applications to apply their development skills.
</p>

<ul>
<li>Social media mobile application</li>
<li>E-commerce mobile app</li>
<li>Chat or messaging application</li>
<li>Authentication-based dashboard app</li>
<li>API-driven mobile application</li>
</ul>

<h3>15. Career Opportunities in Mobile Development</h3>
<p>
Cross-platform mobile developers are in high demand due to the rapid growth of 
mobile applications across industries.
</p>

<ul>
<li>Flutter Developer</li>
<li>React Native Developer</li>
<li>Mobile Application Developer</li>
<li>Cross-platform Developer</li>
<li>Software Engineer</li>
</ul>`
        }
    },

    // ================= DESIGN =================

    {
        slug: "ui-ux-design",
        bgImage: UIUXDesign,
        hero: { title: "Creative", highlight: "UI/UX Design", description: "Design modern user experiences." },
        serviceSection: {
            badgeText: "🎨 UI/UX DESIGN",
            heading: "User-Centered Design",
            highlightText: "For Digital Products.",
            descriptionOne:
                "Conduct user research.\n" +
                "Design wireframes and mockups.\n" +
                "Create interactive prototypes.\n" +
                "Test usability.\n" +
                "Apply modern design principles.",
            descriptionTwo: `<p>
The <strong>UI/UX Design program</strong> focuses on creating visually engaging
and user-friendly digital experiences for websites, mobile applications,
and software platforms. In today's digital landscape, user experience
plays a critical role in determining how successfully users interact
with digital products. This course helps learners understand the
principles of design, usability, and human-centered design thinking.
</p>

<p>
Students will learn how to design intuitive interfaces, improve user
interaction, and create visually appealing digital products using
modern design tools and industry best practices. The program combines
creative design concepts with practical techniques used by professional
UI/UX designers across industries.
</p>

<h4>Introduction to UI & UX Design</h4>
<p>
The course begins with the fundamentals of user interface and user
experience design. Students will understand how design decisions
impact user behavior and how to create seamless digital experiences.
</p>

<ul>
<li>Understanding User Experience (UX)</li>
<li>User Interface (UI) Design Principles</li>
<li>Design Thinking Methodology</li>
<li>Human-Centered Design Approach</li>
<li>Usability and Accessibility Principles</li>
</ul>

<h4>User Research & Analysis</h4>
<p>
Great design starts with understanding the users. Students will learn
how to conduct user research and analyze user behavior to create
effective design solutions.
</p>

<ul>
<li>User Research Techniques</li>
<li>Creating User Personas</li>
<li>User Journey Mapping</li>
<li>Information Architecture</li>
<li>Analyzing User Behavior and Feedback</li>
</ul>

<h4>Wireframing & Prototyping</h4>
<p>
Wireframes and prototypes allow designers to visualize product
structures before development begins. Students will learn how to
transform design ideas into structured layouts and interactive
prototypes.
</p>

<ul>
<li>Low-Fidelity Wireframes</li>
<li>High-Fidelity Design Prototypes</li>
<li>Interactive User Flow Design</li>
<li>Usability Testing and Iteration</li>
<li>Design Validation Techniques</li>
</ul>

<h4>Visual Design & Branding</h4>
<p>
Visual design focuses on creating aesthetically pleasing interfaces
that reflect brand identity and enhance user engagement.
</p>

<ul>
<li>Color Theory and Typography</li>
<li>Layout and Composition Principles</li>
<li>Design Systems and Style Guides</li>
<li>Icon Design and Visual Assets</li>
<li>Brand Identity and Visual Consistency</li>
</ul>

<h4>Design Tools & Technologies</h4>
<p>
Students will work with industry-standard tools used by professional
UI/UX designers to create high-quality designs and interactive
prototypes.
</p>

<ul>
<li>Figma for UI/UX Design</li>
<li>Adobe XD and Creative Tools</li>
<li>Design Collaboration Platforms</li>
<li>Responsive Design for Web and Mobile</li>
<li>Developer Handoff and Design Documentation</li>
</ul>

<h4>Real-World Design Projects</h4>
<p>
The program includes practical projects that help learners design
complete digital products while building a strong design portfolio.
</p>

<ul>
<li>Website UI Design Project</li>
<li>Mobile App Interface Design</li>
<li>SaaS Dashboard Design</li>
<li>Brand Identity & Product Design</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue careers such as
<strong>UI Designer, UX Designer, Product Designer,
Interaction Designer, Visual Designer, or Creative Designer</strong>.
These roles are highly demanded in digital product companies,
design agencies, startups, and technology organizations.
</p>

<p>
By mastering UI/UX design principles and creative problem-solving,
students will be able to design engaging digital experiences that
improve usability, enhance customer satisfaction, and deliver
impactful digital products.
</p>`
        }
    },

    {
        slug: "figma-prototyping",
                bgImage: prototype,

        hero: { title: "Figma", highlight: "Prototyping", description: "Create interactive prototypes." },
        serviceSection: {
            badgeText: "🖌 FIGMA & PROTOTYPING",
            heading: "Modern Design Tools",
            highlightText: "For Collaboration.",
            descriptionOne:
                "Design UI using Figma tools.\n" +
                "Create responsive layouts.\n" +
                "Build interactive prototypes.\n" +
                "Collaborate with teams.\n" +
                "Export design assets efficiently.",
            descriptionTwo: `<h2>Figma Prototyping Syllabus</h2>

<p>
Figma Prototyping focuses on transforming static UI designs into interactive and 
realistic product experiences. This course teaches how to design user flows, create 
interactive screens, simulate real app behavior, and test product usability using 
Figma’s powerful prototyping tools. Students will learn how designers present ideas, 
validate concepts, and collaborate with developers during the product design process.
</p>

<h3>1. Introduction to Prototyping</h3>
<p>
This module introduces the importance of prototyping in the UI/UX design process and 
how it helps designers visualize and test user interactions before development begins.
</p>

<ul>
<li>What is prototyping</li>
<li>Role of prototypes in product design</li>
<li>Low-fidelity vs high-fidelity prototypes</li>
<li>Understanding user journeys</li>
<li>Prototyping workflow in modern design teams</li>
</ul>

<h3>2. Figma Interface for Prototyping</h3>
<p>
Students will learn how to use Figma’s prototyping tools and interface for creating 
interactive designs.
</p>

<ul>
<li>Figma workspace overview</li>
<li>Frames and screen setup</li>
<li>Prototype panel and interaction tools</li>
<li>Connecting frames for navigation</li>
<li>Previewing interactive designs</li>
</ul>

<h3>3. User Flow and Interaction Design</h3>
<p>
User flows define how users move through an application. This module focuses on 
creating smooth navigation experiences.
</p>

<ul>
<li>Designing user flows</li>
<li>Navigation patterns</li>
<li>Button interactions</li>
<li>Page transitions</li>
<li>Creating logical screen connections</li>
</ul>

<h3>4. Interactive Components</h3>
<p>
Interactive components help simulate real application behavior in prototypes.
</p>

<ul>
<li>Creating interactive buttons</li>
<li>Component states (hover, pressed, disabled)</li>
<li>Using variants for interactions</li>
<li>Reusable interactive components</li>
<li>Dynamic UI behavior</li>
</ul>

<h3>5. Animations and Microinteractions</h3>
<p>
Animations and microinteractions enhance user experience by making interfaces feel 
more responsive and engaging.
</p>

<ul>
<li>Smart animate transitions</li>
<li>Page transitions</li>
<li>Microinteractions for buttons and menus</li>
<li>Motion design basics</li>
<li>Improving UX with animations</li>
</ul>

<h3>6. Advanced Prototyping Techniques</h3>
<p>
Students will explore advanced techniques used in professional product design.
</p>

<ul>
<li>Overlay screens and modals</li>
<li>Scroll interactions</li>
<li>Interactive dropdowns</li>
<li>Interactive forms</li>
<li>Complex user flows</li>
</ul>

<h3>7. Usability Testing with Prototypes</h3>
<p>
Prototypes help teams test product usability before development begins.
</p>

<ul>
<li>Conducting usability tests</li>
<li>Collecting user feedback</li>
<li>Identifying usability issues</li>
<li>Improving user experience through iteration</li>
</ul>

<h3>8. Collaboration and Developer Handoff</h3>
<p>
Figma makes collaboration between designers and developers seamless.
</p>

<ul>
<li>Sharing prototypes with teams</li>
<li>Commenting and feedback system</li>
<li>Version history and updates</li>
<li>Design handoff for developers</li>
<li>Exporting design assets</li>
</ul>

<h3>9. Real-World Prototyping Projects</h3>
<p>
Students will create real-world prototypes to practice designing interactive 
digital experiences.
</p>

<ul>
<li>Mobile app interactive prototype</li>
<li>Website navigation prototype</li>
<li>E-commerce user flow prototype</li>
<li>Dashboard interaction prototype</li>
<li>End-to-end application prototype</li>
</ul>

<h3>10. Portfolio and Career Preparation</h3>
<p>
The course concludes with portfolio building and preparation for UI/UX design careers.
</p>

<ul>
<li>Presenting prototypes in design portfolios</li>
<li>Creating case studies</li>
<li>UX design workflow documentation</li>
<li>Career paths in UI/UX design</li>
</ul>`
        }
    },

    {
        slug: "graphic-design",
        bgImage: grapgic,
        hero: { title: "Creative", highlight: "Graphic Design", description: "Create stunning visuals." },
        serviceSection: {
            badgeText: "🖼 GRAPHIC DESIGN",
            heading: "Visual Branding & Media",
            highlightText: "For Digital & Print.",
            descriptionOne:
                "Learn typography and color theory.\n" +
                "Design marketing materials.\n" +
                "Create logos and brand identity.\n" +
                "Work with Adobe tools.\n" +
                "Build creative portfolios.",
            descriptionTwo: `<p>
The <strong>Graphic Design program</strong> is designed to help learners
develop creative and technical skills required to design professional
visual content for digital and print media. Graphic design plays a
vital role in branding, marketing, advertising, and communication,
helping businesses visually connect with their audience.
</p>

<p>
This course introduces students to the principles of visual design,
typography, color theory, and digital illustration while teaching
industry-standard tools used by professional designers. Learners
will gain hands-on experience creating creative assets such as
logos, posters, social media graphics, branding materials,
and marketing visuals.
</p>

<h4>Fundamentals of Graphic Design</h4>
<p>
Students begin by learning the core design principles that form
the foundation of effective visual communication. Understanding
these principles helps designers create balanced and impactful
designs.
</p>

<ul>
<li>Principles of Design and Visual Communication</li>
<li>Color Theory and Color Psychology</li>
<li>Typography and Font Pairing</li>
<li>Layout and Composition Techniques</li>
<li>Visual Hierarchy and Balance</li>
</ul>

<h4>Digital Design Tools</h4>
<p>
The course introduces industry-standard graphic design tools used
by professional designers across creative industries. Students will
learn how to create high-quality visual content using these tools.
</p>

<ul>
<li>Adobe Photoshop for Image Editing</li>
<li>Adobe Illustrator for Vector Graphics</li>
<li>Adobe InDesign for Print Layouts</li>
<li>Digital Illustration Techniques</li>
<li>Design Workflow and File Management</li>
</ul>

<h4>Branding & Visual Identity</h4>
<p>
Branding is a key component of graphic design. Students will learn
how to develop brand identities that visually represent businesses
and communicate brand values effectively.
</p>

<ul>
<li>Logo Design and Brand Identity</li>
<li>Color Palettes and Brand Guidelines</li>
<li>Corporate Identity Design</li>
<li>Visual Branding for Businesses</li>
<li>Brand Consistency Across Media</li>
</ul>

<h4>Marketing & Advertising Design</h4>
<p>
Graphic designers often create marketing materials that help
businesses promote their products and services. This module
focuses on designing creative assets used in advertising campaigns.
</p>

<ul>
<li>Poster and Banner Design</li>
<li>Social Media Graphics</li>
<li>Digital Marketing Visuals</li>
<li>Promotional Materials and Brochures</li>
<li>Creative Advertising Concepts</li>
</ul>

<h4>Print & Publication Design</h4>
<p>
Students will also explore print design, which includes designing
materials used in magazines, books, and marketing publications.
</p>

<ul>
<li>Magazine and Book Layout Design</li>
<li>Flyers and Brochure Design</li>
<li>Packaging Design Concepts</li>
<li>Print Production and File Preparation</li>
<li>Design for Print vs Digital Media</li>
</ul>

<h4>Creative Projects</h4>
<p>
The course includes practical projects where students apply their
design knowledge to create professional-quality graphics and build
a strong creative portfolio.
</p>

<ul>
<li>Logo and Brand Identity Project</li>
<li>Social Media Campaign Design</li>
<li>Marketing Poster Design</li>
<li>Product Packaging Concept</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue careers such as
<strong>Graphic Designer, Visual Designer, Brand Designer,
Creative Designer, or Digital Marketing Designer</strong>.
Graphic designers are in high demand across advertising agencies,
design studios, marketing teams, and digital media companies.
</p>

<p>
By mastering graphic design tools and creative techniques,
students will be able to produce visually compelling content
that communicates ideas effectively and enhances brand identity.
</p>`
        }
    },

    // ================= DATABASE =================

    {
        slug: "sql-nosql",
                bgImage: sql,

        hero: { title: "SQL &", highlight: "NoSQL", description: "Master relational and non-relational databases." },
        serviceSection: {
            badgeText: "🗄 DATABASE SYSTEMS",
            heading: "Manage Modern Databases",
            highlightText: "For Scalable Apps.",
            descriptionOne:
                "Work with MySQL and PostgreSQL.\n" +
                "Design relational schemas.\n" +
                "Understand normalization.\n" +
                "Work with MongoDB and Redis.\n" +
                "Handle indexing strategies.",
            descriptionTwo: `<p>
The <strong>SQL & NoSQL Databases program</strong> is designed to provide
comprehensive knowledge of modern data management systems used in
today’s applications. Databases are the foundation of almost every
software system, enabling applications to store, manage, and retrieve
data efficiently and securely.
</p>

<p>
This course introduces both <strong>relational databases (SQL)</strong> and
<strong>non-relational databases (NoSQL)</strong>, helping students understand
how different database technologies are used in real-world systems.
Learners will gain hands-on experience designing databases, writing
queries, optimizing performance, and managing large datasets used
in modern web and enterprise applications.
</p>

<h4>Introduction to Databases</h4>
<p>
Students will begin by learning the fundamentals of database systems
and how data is structured, stored, and accessed in different types
of applications.
</p>

<ul>
<li>Introduction to Database Management Systems (DBMS)</li>
<li>Understanding Data Models</li>
<li>Relational vs Non-Relational Databases</li>
<li>Database Architecture and Components</li>
<li>Data Integrity and Consistency</li>
</ul>

<h4>SQL Database Concepts</h4>
<p>
Structured Query Language (SQL) is widely used for managing relational
databases such as MySQL, PostgreSQL, and SQL Server. Students will
learn how to design relational schemas and interact with databases
using powerful SQL queries.
</p>

<ul>
<li>Relational Database Design</li>
<li>Tables, Columns, and Data Types</li>
<li>Primary Keys and Foreign Keys</li>
<li>Database Normalization</li>
<li>Constraints and Relationships</li>
</ul>

<h4>SQL Querying & Data Operations</h4>
<p>
Students will learn how to retrieve, insert, update, and delete
data efficiently using SQL queries and advanced querying techniques.
</p>

<ul>
<li>CRUD Operations (Create, Read, Update, Delete)</li>
<li>Filtering and Sorting Data</li>
<li>Joins and Relationships</li>
<li>Aggregate Functions and Grouping</li>
<li>Subqueries and Advanced SQL Queries</li>
</ul>

<h4>NoSQL Database Systems</h4>
<p>
NoSQL databases are designed to handle large volumes of unstructured
and semi-structured data. Students will explore modern NoSQL systems
widely used in scalable applications.
</p>

<ul>
<li>Introduction to NoSQL Databases</li>
<li>Document-Based Databases (MongoDB)</li>
<li>Key-Value Databases</li>
<li>Column-Oriented Databases</li>
<li>Use Cases for NoSQL Systems</li>
</ul>

<h4>Database Performance & Optimization</h4>
<p>
Efficient database performance is essential for scalable applications.
Students will learn optimization techniques used by developers and
database administrators to improve system performance.
</p>

<ul>
<li>Indexing Strategies</li>
<li>Query Performance Optimization</li>
<li>Database Caching Techniques</li>
<li>Handling Large Data Sets</li>
<li>Database Monitoring and Tuning</li>
</ul>

<h4>Data Security & Backup</h4>
<p>
Protecting sensitive data and ensuring reliability is a critical
part of database management. Students will learn how to secure
databases and maintain data integrity.
</p>

<ul>
<li>Database Access Control</li>
<li>Authentication and Authorization</li>
<li>Data Encryption Techniques</li>
<li>Backup and Recovery Strategies</li>
<li>Database Security Best Practices</li>
</ul>

<h4>Real-World Database Projects</h4>
<p>
Students will work on practical database projects to gain real-world
experience designing and managing data systems used in modern
applications.
</p>

<ul>
<li>Designing a Relational Database Schema</li>
<li>Building a Data Management System</li>
<li>MongoDB Data Modeling Project</li>
<li>Database Query Optimization Project</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue careers such as
<strong>Database Developer, Data Engineer, Backend Developer,
Database Administrator (DBA), or Data Analyst</strong>.
These roles are essential in organizations that rely on large-scale
data systems such as fintech companies, cloud platforms, and
technology startups.
</p>

<p>
By mastering SQL and NoSQL technologies, students will gain the
skills required to design efficient data systems and support
scalable applications in modern software environments.
</p>`
        }
    },

    {
        slug: "data-warehousing",
                bgImage: Data_Warehousing,

        hero: { title: "Modern", highlight: "Data Warehousing", description: "Build enterprise data warehouses." },
        serviceSection: {
            badgeText: "📦 DATA WAREHOUSING",
            heading: "Analytics Infrastructure",
            highlightText: "For Business Intelligence.",
            descriptionOne:
                "Design ETL pipelines.\n" +
                "Implement data modeling.\n" +
                "Work with BI tools.\n" +
                "Optimize warehouse queries.\n" +
                "Manage large datasets.",
            descriptionTwo: `<h2>Data Warehousing Syllabus</h2>

<p>
Data Warehousing focuses on designing and managing centralized repositories that store 
large volumes of structured data for analytics and business intelligence. This course 
covers data warehouse architecture, ETL processes, data modeling, and modern data 
warehousing tools used by organizations to analyze and make data-driven decisions.
</p>

<h3>1. Introduction to Data Warehousing</h3>
<p>
This module introduces the fundamentals of data warehousing and explains how it differs 
from traditional database systems.
</p>

<ul>
<li>What is a data warehouse</li>
<li>Data warehouse vs operational databases</li>
<li>Importance of data warehousing in business intelligence</li>
<li>Characteristics of data warehouses</li>
<li>Overview of data warehouse architecture</li>
</ul>

<h3>2. Data Warehouse Architecture</h3>
<p>
Students will learn about the different layers and components that make up a modern 
data warehouse system.
</p>

<ul>
<li>Three-tier data warehouse architecture</li>
<li>Data source layer</li>
<li>Data integration layer</li>
<li>Data storage layer</li>
<li>Data access and presentation layer</li>
</ul>

<h3>3. Data Modeling for Data Warehouses</h3>
<p>
Data modeling is essential for designing efficient data warehouse structures.
</p>

<ul>
<li>Dimensional modeling concepts</li>
<li>Fact tables and dimension tables</li>
<li>Star schema design</li>
<li>Snowflake schema design</li>
<li>Data modeling best practices</li>
</ul>

<h3>4. ETL (Extract, Transform, Load) Processes</h3>
<p>
ETL processes are used to extract data from multiple sources, transform it into a 
structured format, and load it into the data warehouse.
</p>

<ul>
<li>Extracting data from multiple sources</li>
<li>Data transformation techniques</li>
<li>Data cleansing and validation</li>
<li>Loading data into data warehouses</li>
<li>ETL pipeline design</li>
</ul>

<h3>5. Data Integration and Data Quality</h3>
<p>
This module focuses on combining data from different systems and ensuring data accuracy 
and consistency.
</p>

<ul>
<li>Data integration techniques</li>
<li>Handling duplicate data</li>
<li>Data quality management</li>
<li>Data validation rules</li>
<li>Data governance basics</li>
</ul>

<h3>6. OLAP and Analytical Processing</h3>
<p>
Online Analytical Processing (OLAP) enables fast analysis of multidimensional data.
</p>

<ul>
<li>OLAP vs OLTP systems</li>
<li>Multidimensional data models</li>
<li>Data cubes</li>
<li>Aggregation and roll-up operations</li>
<li>Drill-down analysis</li>
</ul>

<h3>7. SQL for Data Warehousing</h3>
<p>
Students will learn advanced SQL techniques used for querying and analyzing data 
within a warehouse environment.
</p>

<ul>
<li>Advanced SQL queries</li>
<li>Joins and subqueries</li>
<li>Window functions</li>
<li>Data aggregation techniques</li>
<li>Query optimization</li>
</ul>

<h3>8. Data Warehouse Performance Optimization</h3>
<p>
This module focuses on techniques used to improve query performance and system efficiency.
</p>

<ul>
<li>Indexing strategies</li>
<li>Partitioning techniques</li>
<li>Materialized views</li>
<li>Query tuning</li>
<li>Data compression methods</li>
</ul>

<h3>9. Cloud Data Warehousing</h3>
<p>
Modern data warehouses are increasingly built on cloud platforms.
</p>

<ul>
<li>Introduction to cloud data warehousing</li>
<li>Amazon Redshift</li>
<li>Google BigQuery</li>
<li>Azure Synapse Analytics</li>
<li>Benefits of cloud-based data warehouses</li>
</ul>

<h3>10. Business Intelligence and Reporting</h3>
<p>
Data warehouses support business intelligence tools used for reporting and analytics.
</p>

<ul>
<li>Introduction to business intelligence</li>
<li>Data visualization tools</li>
<li>Dashboard design</li>
<li>Generating reports and insights</li>
<li>Data-driven decision making</li>
</ul>

<h3>11. Data Warehouse Security and Governance</h3>
<p>
Security and governance ensure that sensitive data is protected and properly managed.
</p>

<ul>
<li>Access control and authentication</li>
<li>Data encryption techniques</li>
<li>Data governance policies</li>
<li>Compliance and regulatory standards</li>
</ul>

<h3>12. Real-World Data Warehousing Projects</h3>
<p>
Students will build practical projects to understand how data warehouses are used in 
real-world business environments.
</p>

<ul>
<li>Designing a data warehouse schema</li>
<li>Building an ETL pipeline</li>
<li>Creating a business intelligence dashboard</li>
<li>Data analytics reporting system</li>
<li>Cloud-based data warehouse implementation</li>
</ul>

<h3>13. Career Opportunities in Data Warehousing</h3>
<p>
Data warehousing professionals play a key role in managing enterprise data systems.
</p>

<ul>
<li>Data Warehouse Engineer</li>
<li>Data Engineer</li>
<li>Business Intelligence Developer</li>
<li>Data Analyst</li>
<li>Analytics Engineer</li>
</ul>`
        }
    },

    {
        slug: "database-administration",
                bgImage: data_admin,

        hero: { title: "Professional", highlight: "Database Administration", description: "Manage and secure enterprise databases." },
        serviceSection: {
            badgeText: "🛠 DATABASE ADMINISTRATION",
            heading: "Database Security & Optimization",
            highlightText: "For Enterprise Systems.",
            descriptionOne:
                "Monitor database performance.\n" +
                "Implement backup & recovery.\n" +
                "Secure database access.\n" +
                "Optimize indexes and queries.\n" +
                "Manage high-availability systems.",
            descriptionTwo: `<p>
The <strong>Database Administration program</strong> is designed to train
professionals in managing, maintaining, and securing database systems
used by modern applications and enterprise platforms. Database
administrators (DBAs) play a critical role in ensuring that databases
are reliable, secure, and optimized for performance.
</p>

<p>
This course provides a comprehensive understanding of database
architecture, system configuration, data management, backup strategies,
and performance optimization. Students will learn how to administer
both small and large-scale database environments used in modern
organizations.
</p>

<h4>Introduction to Database Administration</h4>
<p>
Students will begin by learning the fundamentals of database
administration and how databases support business applications
and enterprise systems.
</p>

<ul>
<li>Role and Responsibilities of a Database Administrator</li>
<li>Overview of Database Management Systems (DBMS)</li>
<li>Relational Database Architecture</li>
<li>Database Server Setup and Configuration</li>
<li>Database Environment Management</li>
</ul>

<h4>Database Installation & Configuration</h4>
<p>
Proper installation and configuration are essential for building
reliable database environments. Students will learn how to set up
and configure database systems for optimal performance and security.
</p>

<ul>
<li>Database Server Installation</li>
<li>Environment Configuration</li>
<li>Managing Database Instances</li>
<li>Storage Management and Disk Configuration</li>
<li>Database Parameter Tuning</li>
</ul>

<h4>User Management & Security</h4>
<p>
Ensuring secure access to database systems is a key responsibility
of database administrators. Students will learn how to implement
strong security measures to protect sensitive data.
</p>

<ul>
<li>User Account Management</li>
<li>Roles and Privilege Assignment</li>
<li>Authentication and Authorization</li>
<li>Data Encryption Techniques</li>
<li>Security Best Practices</li>
</ul>

<h4>Backup & Recovery Management</h4>
<p>
Backup and recovery strategies are essential to prevent data loss
and maintain business continuity. Students will learn how to
implement reliable backup systems and recover databases in case
of failures.
</p>

<ul>
<li>Full and Incremental Backups</li>
<li>Automated Backup Scheduling</li>
<li>Disaster Recovery Planning</li>
<li>Point-in-Time Recovery</li>
<li>Data Restoration Techniques</li>
</ul>

<h4>Performance Monitoring & Optimization</h4>
<p>
Database administrators must ensure that database systems operate
efficiently even under heavy workloads. This module focuses on
performance monitoring and optimization techniques.
</p>

<ul>
<li>Database Performance Monitoring</li>
<li>Query Optimization Techniques</li>
<li>Indexing Strategies</li>
<li>Resource Usage Monitoring</li>
<li>Database Tuning and Optimization</li>
</ul>

<h4>High Availability & Scalability</h4>
<p>
Modern applications require databases that can scale and remain
available even during system failures. Students will learn advanced
techniques for maintaining high availability and scalability.
</p>

<ul>
<li>Database Replication</li>
<li>Load Balancing Strategies</li>
<li>Clustered Database Systems</li>
<li>Failover and Redundancy</li>
<li>Distributed Database Architectures</li>
</ul>

<h4>Cloud Database Administration</h4>
<p>
Many organizations now use cloud-based database systems. Students
will explore how to manage and monitor databases deployed in cloud
environments.
</p>

<ul>
<li>Cloud Database Services</li>
<li>Managed Database Platforms</li>
<li>Cloud Backup and Security</li>
<li>Monitoring Cloud Databases</li>
<li>Scaling Database Infrastructure</li>
</ul>

<h4>Real-World Administration Projects</h4>
<p>
Students will work on practical projects that simulate real database
administration tasks used in enterprise environments.
</p>

<ul>
<li>Database Server Setup Project</li>
<li>Security Configuration and User Management</li>
<li>Database Backup and Recovery Implementation</li>
<li>Performance Optimization Case Study</li>
</ul>

<h4>Career Opportunities</h4>
<p>
After completing this program, learners can pursue roles such as
<strong>Database Administrator (DBA), Data Infrastructure Engineer,
Database Support Engineer, Database Consultant, or System Administrator</strong>.
These professionals are highly demanded in industries that rely on
large-scale data systems including finance, healthcare, e-commerce,
and cloud computing companies.
</p>

<p>
By mastering database administration skills, students will gain the
ability to maintain secure, high-performance database systems that
support modern digital applications and enterprise platforms.
</p>`
        }
    }

];
const CourseDetails = () => {
    const { slug } = useParams();

    const course = courses.find((c) => c.slug === slug);

    if (!course) return <h2>Course Not Found</h2>;

    return (
        <>
            <ServicesHero
                bgImage={course.bgImage}
                title={course.hero.title}
                highlight={course.hero.highlight}
                description={course.hero.description}
            />

            <MernServiceSection
                badgeText={course.serviceSection.badgeText}
                heading={course.serviceSection.heading}
                highlightText={course.serviceSection.highlightText}
                descriptionOne={course.serviceSection.descriptionOne}
                descriptionTwo={course.serviceSection.descriptionTwo}
                services={course.serviceSection.services}

            />
            <ToolsSection />
        </>
    );
};

export default CourseDetails;