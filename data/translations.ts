
export const translations = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            services: "Servicios",
            projects: "Proyectos",
            skills: "Habilidades",
            experience: "Trayectoria",
            contact: "Contacto",
        },
        hero: {
            available: "Disponible para trabajar y Aprender",
            role: "Teg. Análisis y Desarrollo de Software",
            projects: "Ver Proyectos",
            cv: "Descargar CV",
            cvFile: "/documents/cv-es.pdf",
        },
        about: {
            title: "Sobre",
            me: "Mí",
            p1: "Soy estudiante del programa Tecnólogo en Análisis y Desarrollo de Software en el SENA, actualmente finalizando mi etapa lectiva. Me encuentro próxima a iniciar mis prácticas (etapa productiva), con altas expectativas de participar en proyectos desafiantes y fortalecer mi aprendizaje continuamente.",
            p2: "Más allá del código, mi formación me está preparando para ser una solucionadora de problemas completa. Combino competencias técnicas sólidas en análisis, diseño y pruebas con habilidades humanas esenciales como la disciplina, la adaptabilidad y el aprendizaje autónomo. Mi objetivo es crear soluciones tecnológicas que no solo funcionen, sino que aporten al desarrollo social y empresarial.",
            qualities: {
                ethics: "Ética y Calidad",
                ethicsDesc: "Compromiso inquebrantable con el desarrollo de software robusto y responsable.",
                team: "Trabajo en Equipo",
                teamDesc: "Habilidad para colaborar, liderar y potenciar la sinergia en ambientes ágiles.",
                innovation: "Innovación",
                innovationDesc: "Proactividad para proponer soluciones creativas a problemas complejos.",
                results: "Orientación a Resultados",
                resultsDesc: "Enfoque en crear aplicaciones funcionales que resuelvan necesidades reales.",
            },
        },
        skills: {
            title: "Habilidades y",
            education: "Educación",
            subtitle: "Mi arsenal técnico y el camino de aprendizaje que he recorrido para convertirme en el profesional que soy hoy.",
            techSkills: "Competencias Técnicas",
            eduCert: "Educación y Certificados",
            continuousLearning: "Aprendizaje Continuo",
            continuousLearningDesc: "Siempre actualizándome con nuevas tecnologías.",
            eduItems: [
                {
                    title: "Tecnólogo en Análisis y Desarrollo de Software",
                    institution: "SENA",
                    year: "Finalizando Etapa Lectiva, próxima a entrar a la etapa de prácticas - 2026",
                    description: "Formación integral en desarrollo de software, calidad y trabajo colaborativo.",
                },
                {
                    title: "Certificación DESARROLLO WEB BACKEND NESTJS",
                    institution: "El Servicio Nacional de Aprendizaje - SENA, Cámara Colombiana de Comercio Electrónico",
                    year: "2025",
                    description: "Curso intensivo de desarrollo backend con NestJS.",
                }
            ]
        },
        projects: {
            title: "Proyectos",
            featured: "Destacados",
            subtitle: "Una selección de mis trabajos recientes, demostrando capacidades en diferentes áreas del desarrollo.",
            categories: {
                all: "Todos",
                gamedev: "Game Dev",
                frontend: "Frontend",
                fullstack: "Full Stack",
                backend: "Backend"
            },
            items: [
                {
                    title: "Dimension Shift",
                    description: "Juego de peleas 3D con escenarios aleatorios y dos niveles intensos. Desarrollado en Unity con C#.",
                    detailedDescription: "Un emocionante juego de lucha en 3D que transporta a los jugadores a diversos escenarios generados proceduralmente. Incluye mecánicas de combate pulidas, animaciones fluidas y una banda sonora inmersiva que se adapta a la intensidad de la batalla.",
                },
                {
                    title: "Emisoras Latinas",
                    description: "Plataforma de streaming de radio con más de 15,000 emisoras latinas en vivo. Directorio completo con reproductor optimizado.",
                    detailedDescription: "Plataforma web que conecta a usuarios con miles de emisoras de radio de toda Latinoamérica. Ofrece una interfaz intuitiva, categorización por país y género, y una experiencia de audio sin interrupciones mediante streaming de alta calidad.",
                },
                {
                    title: "UptownHair",
                    description: "App de reservas para salones de belleza. Plataforma exclusiva con roles para clientes, administradores y empleados.",
                    detailedDescription: "Solución integral para la gestión de salones de belleza. Permite a los clientes agendar citas en tiempo real, a los empleados gestionar sus agendas y a los administradores supervisar el rendimiento del negocio mediante un panel de control avanzado.",
                },
                {
                    title: "Mi Portafolio Web",
                    description: "Portafolio profesional interactivo y bilingüe con animaciones avanzadas y diseño responsivo.",
                    detailedDescription: "Este mismo sitio web donde presento mi trabajo y habilidades. Construido con tecnologías modernas para ofrecer una experiencia de usuario fluida, soporte multi-idioma y una estética visualmente atractiva en cualquier dispositivo.",
                },
                {
                    title: "Entre Lanas y Fragancias",
                    description: "Sistema integral de gestión para tiendas textiles: ecommerce y panel administrativo avanzado.",
                    detailedDescription: "Una solución completa que combina una tienda virtual para clientes con un potente aplicativo administrativo. El sistema gestiona todo el ciclo comercial: control exhaustivo de inventarios (entradas y salidas), gestión de pedidos web en tiempo real, integración de pagos mediante códigos QR, generación automática de contratos y reportes detallados de ventas y stock.",
                },
            ],
            inProgressTitle: "Proyectos en Desarrollo",
            inProgressSubtitle: "Próximamente... Ideas que están cobrando vida.",
            inProgressItems: [
                // UptownHair moved to featured


                {
                    title: "AgroSoft",
                    description: "Sistema de control de ganadería: partos, nacimientos, ventas de leche/ganado e inventario de insumos.",
                    tech: ["Python", "Django", "React", "PostgreSQL"],
                    image: "/documents/agrosoft-bg.png",
                    detailedDescription: "Plataforma innovadora para la digitalización del sector ganadero. Automatiza el seguimiento del ciclo de vida animal (partos y nacimientos), gestiona las ventas diarias de leche y ganado, y prevee necesidades de insumos basándose en datos históricos para optimizar la productividad de la finca."
                },
                {
                    title: "Sinergia",
                    description: "Empresa familiar de software para apoyar ideas creativas de emprendedores mediante IA, automatización y modernización tecnológica.",
                    tech: ["IA", "Automation", "Next.js"],
                    image: "/images/LOGO FINAL-03.png",
                    detailedDescription: "Una iniciativa dedicada a impulsar el crecimiento de pequeñas y medianas empresas. Aplicamos las últimas tendencias en inteligencia artificial y tecnología moderna para automatizar procesos manuales, modernizar infraestructuras y escalar las ideas creativas de los emprendedores."
                }
            ]
        },
        experience: {
            title: "Trayectoria de",
            learning: "Aprendizaje",
            items: [
                {
                    role: "Análisis y Planeación",
                    company: "Fase Inicial",
                    period: "Etapa 1",
                    description: "Levantamiento de requisitos, diagramas de flujo, lógica algorítmica y diseño de la arquitectura del software bajo metodologías ágiles.",
                },
                {
                    role: "Ejecución y Desarrollo",
                    company: "Fase de Construcción",
                    period: "Etapa 2",
                    description: "Programación frontend y backend (Java, PHP, TS). Gestión de bases de datos (SQL/NoSQL) y control de versiones con Git/GitHub.",
                },
                {
                    role: "Pruebas y Calidad",
                    company: "Fase de Verificación",
                    period: "Etapa 3",
                    description: "Implementación de buenas prácticas de calidad, ejecución de pruebas unitarias y de integración, y aseguramiento de estándares de código.",
                },
                {
                    role: "Mantenimiento e Implantación",
                    company: "Fase Final",
                    period: "Etapa 4",
                    description: "Aplicación y operación de la solución de software desarrollada. Despliegue en entornos productivos y soporte continuo.",
                },
            ]
        },
        services: {
            title: "Servicios y",
            subtitle: "Soluciones",
            intro: "Como egresada del SENA en Análisis y Desarrollo de Software, ofrezco un conjunto integral de servicios técnicos enfocados en resolver problemas empresariales reales.",
            items: [
                {
                    title: "Desarrollo Web y Móvil",
                    description: "Creación de aplicaciones web interactivas y soluciones móviles con frameworks modernos.",
                },
                {
                    title: "Gestión de Bases de Datos",
                    description: "Diseño, modelado y optimización de bases de datos relacionales (MySQL) y no relacionales (MongoDB).",
                },
                {
                    title: "Análisis y Diseño",
                    description: "Levantamiento de requisitos, especificación funcional y diseño de arquitectura de software.",
                },
                {
                    title: "Implementación y QA",
                    description: "Escritura de código limpio (Clean Code) y ejecución de pruebas para asegurar la calidad.",
                },
            ],
            keyRoles: {
                title: "Roles Clave",
                items: ["Desarrollador de Software", "Analista de Requisitos", "Admin. de Bases de Datos", "Tester QA"]
            },
            softSkills: {
                title: "Habilidades Transversales",
                items: ["Trabajo en Equipo", "Pensamiento Crítico", "Adaptabilidad", "Scrum y Git"]
            }
        },
        footer: {
            title: "¿Tienes un proyecto en mente?",
            subtitle: "Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.",
            cta: "¡Hablemos!",
            whatsapp: "Escríbeme al WhatsApp",
            rights: "Todos los derechos reservados.",
            madeWith: "Hecho con",
            using: "usando Next.js & Tailwind",
            form: {
                name: "Tu Nombre",
                email: "Tu Correo",
                country: "País",
                phone: "Teléfono",
                message: "¿En qué puedo ayudarte?",
                send: "Enviar Mensaje",
                sending: "Enviando...",
                success: "¡Mensaje enviado con éxito!",
                error: "Hubo un error. Por favor intenta de nuevo."
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About Me",
            services: "Services",
            projects: "Projects",
            skills: "Skills",
            experience: "Trajectory",
            contact: "Contact",
        },
        hero: {
            available: "Available to work and Learn",
            role: "Software Analysis and Development Technologist",
            projects: "View Projects",
            cv: "Download CV",
            cvFile: "/documents/cv-en.pdf",
        },
        about: {
            title: "About",
            me: "Me",
            p1: "I am a student of the Software Analysis and Development Technology program at SENA, currently finishing my elective stage. I am about to start my internship (productive stage), with high expectations of participating in challenging projects and continuously strengthening my learning.",
            p2: "Beyond code, my training is preparing me to be a complete problem solver. I combine solid technical competencies in analysis, design, and testing with essential human skills such as discipline, adaptability, and autonomous learning. My goal is to create technological solutions that not only work but also contribute to social and business development.",
            qualities: {
                ethics: "Ethics & Quality",
                ethicsDesc: "Unwavering commitment to robust and responsible software development.",
                team: "Teamwork",
                teamDesc: "Ability to collaborate, lead, and enhance synergy in agile environments.",
                innovation: "Innovation",
                innovationDesc: "Proactivity to propose creative solutions to complex problems.",
                results: "Results Oriented",
                resultsDesc: "Focus on creating functional applications that solve real needs.",
            },
        },
        skills: {
            title: "Skills &",
            education: "Education",
            subtitle: "My technical arsenal and the learning path I have traveled to become the professional I am today.",
            techSkills: "Technical Competencies",
            eduCert: "Education & Certificates",
            continuousLearning: "Continuous Learning",
            continuousLearningDesc: "Always updating myself with new technologies.",
            eduItems: [
                {
                    title: "Software Analysis and Development Technologist",
                    institution: "SENA",
                    year: "Finishing Elective Stage, soon to enter internship stage - 2026",
                    description: "Comprehensive training in software development, quality, and collaborative work.",
                },
                {
                    title: "NESTJS BACKEND WEB DEVELOPMENT Certification",
                    institution: "National Learning Service - SENA, Colombian Chamber of Electronic Commerce",
                    year: "2025",
                    description: "Intensive backend development course with NestJS.",
                }
            ]
        },
        projects: {
            title: "Featured",
            featured: "Projects",
            subtitle: "A selection of my recent work, demonstrating capabilities in different areas of development.",
            categories: {
                all: "All",
                gamedev: "Game Dev",
                frontend: "Frontend",
                fullstack: "Full Stack",
                backend: "Backend"
            },
            items: [
                {
                    title: "Dimension Shift",
                    description: "3D fighting game with random scenarios and two intense levels. Developed in Unity with C#.",
                    detailedDescription: "An exciting 3D fighting game that transports players to diverse procedurally generated scenarios. Features polished combat mechanics, fluid animations, and an immersive soundtrack that adapts to the battle's intensity.",
                },
                {
                    title: "Emisoras Latinas",
                    description: "Radio streaming platform with over 15,000 live Latin stations. Complete directory with optimized player.",
                    detailedDescription: "A web platform connecting users with thousands of live radio stations from all over Latin America. Offers an intuitive interface, categorization by country and genre, and a seamless audio experience through high-quality streaming.",
                },
                {
                    title: "UptownHair",
                    description: "Beauty salon booking app. Exclusive platform with roles for clients, admins, and employees.",
                    detailedDescription: "A comprehensive solution for beauty salon management. Allows clients to book appointments in real-time, employees to manage their schedules, and administrators to oversee business performance through an advanced dashboard.",
                },
                {
                    title: "My Web Portfolio",
                    description: "Interactive and bilingual professional portfolio with advanced animations and responsive design.",
                    detailedDescription: "This very website where I showcase my work and skills. Built with modern technologies to offer a smooth user experience, multi-language support, and a visually appealing aesthetic on any device.",
                },
                {
                    title: "Between Wools and Fragrances",
                    description: "Comprehensive management system for textile shops: ecommerce and advanced admin panel.",
                    detailedDescription: "A complete solution that combines a virtual store for customers with a powerful administrative application. The system manages the entire commercial cycle: exhaustive inventory control (inflows and outflows), real-time web order management, QR code payment integration, automatic contract generation, and detailed sales and stock reports.",
                }
            ],
            inProgressTitle: "Projects In Development",
            inProgressSubtitle: "Coming soon... Ideas coming to life.",
            inProgressItems: [
                // UptownHair moved to featured

                {
                    title: "AgroSoft",
                    description: "Cattle control system: calving dates, births, milk/cattle sales, and supplies inventory.",
                    tech: ["Python", "Django", "React", "PostgreSQL"],
                    image: "/documents/agrosoft-bg.png",
                    detailedDescription: "An innovative platform for the digitalization of the livestock sector. It automates animal lifecycle tracking (calving and births), manages daily milk and cattle sales, and predicts supply needs based on historical data to optimize farm productivity."
                },
                {
                    title: "Sinergia",
                    description: "Family software company to support creative ideas of entrepreneurs through AI, automation, and technological modernization.",
                    tech: ["AI", "Automation", "Next.js"],
                    image: "/images/LOGO FINAL-03.png",
                    detailedDescription: "An initiative dedicated to driving the growth of small and medium-sized businesses. We apply the latest trends in artificial intelligence and modern technology to automate manual processes, modernize infrastructure, and scale the creative ideas of entrepreneurs."
                }
            ]
        },
        experience: {
            title: "Learning",
            learning: "Trajectory",
            items: [
                {
                    role: "Analysis and Planning",
                    company: "Initial Phase",
                    period: "Stage 1",
                    description: "Requirements gathering, flowcharts, algorithmic logic, and software architecture design under agile methodologies.",
                },
                {
                    role: "Execution and Development",
                    company: "Construction Phase",
                    period: "Stage 2",
                    description: "Frontend and backend programming (Java, PHP, TS). Database management (SQL/NoSQL) and version control with Git/GitHub.",
                },
                {
                    role: "Testing and Quality",
                    company: "Verification Phase",
                    period: "Stage 3",
                    description: "Implementation of quality best practices, execution of unit and integration tests, and assurance of code standards.",
                },
                {
                    role: "Maintenance and Implementation",
                    company: "Final Phase",
                    period: "Stage 4",
                    description: "Application and operation of the developed software solution. Deployment in productive environments and continuous support.",
                },
            ]
        },
        services: {
            title: "Services &",
            subtitle: "Solutions",
            intro: "As a SENA graduate in Software Analysis and Development, I offer a comprehensive set of technical services focused on solving real business problems.",
            items: [
                {
                    title: "Web & Mobile Development",
                    description: "Creation of interactive web applications and mobile solutions using modern frameworks.",
                },
                {
                    title: "Database Management",
                    description: "Design, modeling, and optimization of relational (MySQL) and non-relational (MongoDB) databases.",
                },
                {
                    title: "Analysis & Design",
                    description: "Requirements gathering, functional specification, and software architecture design.",
                },
                {
                    title: "Implementation & QA",
                    description: "Clean Code writing and comprehensive testing execution to ensure quality.",
                },
            ],
            keyRoles: {
                title: "Key Roles",
                items: ["Software Developer", "Requirements Analyst", "Database Administrator", "QA Tester"]
            },
            softSkills: {
                title: "Soft Skills",
                items: ["Teamwork", "Critical Thinking", "Adaptability", "Scrum & Git"]
            }
        },
        footer: {
            title: "Have a project in mind?",
            subtitle: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
            cta: "Let's Talk!",
            whatsapp: "Text me on WhatsApp",
            rights: "All rights reserved.",
            madeWith: "Made with",
            using: "using Next.js & Tailwind",
            form: {
                name: "Your Name",
                email: "Your Email",
                country: "Country",
                phone: "Phone",
                message: "How can I help you?",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "There was an error. Please try again."
            }
        }
    }
};

export type Language = "es" | "en";
