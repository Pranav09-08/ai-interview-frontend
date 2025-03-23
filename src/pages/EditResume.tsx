import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card, Alert, Dropdown, FormControl, InputGroup } from "react-bootstrap";

const EditResume = () => {
    const [personalDetails, setPersonalDetails] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
    });

    const [education, setEducation] = useState([
        { degree: "", institution: "", startYear: "", endYear: "", percentage: "" },
    ]);

    const [experience, setExperience] = useState([
        { company: "", role: "", duration: "", description: "" },
    ]);

    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([
        { title: "", description: "", githubLink: "" },
    ]);

    const [error, setError] = useState("");
    const [errorEducation, setErrorEducation] = useState("");
    const [errorExperience, setErrorExperience] = useState("");
    const [errorSkills, setErrorSkills] = useState("");

    // Predefined skills (like Internshala)
    const predefinedSkills = [
        "JavaScript", "Python", "Java", "C++", "React", "Node.js", "HTML", "CSS", "SQL", "Machine Learning", "Data Analysis"
    ];

    const yearRange = (start, end) => {
        const years = [];
        for (let i = start; i <= end; i++) {
            years.push(i);
        }
        return years;
    };

    // Handler functions
    const handlePersonalChange = (e) => {
        setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
    };

    const handleAddEducation = () => {
        if (education.some((edu) => !edu.degree || !edu.institution || !edu.startYear || !edu.endYear || !edu.percentage)) {
            setErrorEducation("Please fill out all fields in the education entry before adding more.");
            return;
        }
        setErrorEducation("");
        setEducation([
            ...education,
            { degree: "", institution: "", startYear: "", endYear: "", percentage: "" },
        ]);
    };

    const handleAddExperience = () => {
        if (experience.some((exp) => !exp.company || !exp.role || !exp.duration || !exp.description)) {
            setErrorExperience("Please fill out all fields in the experience entry before adding more.");
            return;
        }
        setErrorExperience("");
        setExperience([
            ...experience,
            { company: "", role: "", duration: "", description: "" },
        ]);
    };

    const handleAddSkill = (selectedSkill) => {
        if (!skills.includes(selectedSkill)) {
            setSkills([...skills, selectedSkill]);
        }
    };

    const handleAddProject = () => {
        if (projects.some((proj) => !proj.title || !proj.description || !proj.githubLink)) {
            setError("Please fill out all fields in the project entry before adding more.");
            return;
        }
        setError("");
        setProjects([
            ...projects,
            { title: "", description: "", githubLink: "" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation check for required fields
        if (!personalDetails.name || !personalDetails.email || !personalDetails.phone) {
            setError("Please fill out all personal details.");
            return;
        }

        const hasValidEducation = education.every(
            (edu) => edu.degree && edu.institution && edu.startYear && edu.endYear && edu.percentage
        );
        if (!hasValidEducation) {
            setError("Please fill out all fields in the Education section.");
            return;
        }

        const hasValidExperience = experience.every(
            (exp) => exp.company && exp.role && exp.duration && exp.description
        );
        if (!hasValidExperience) {
            setError("Please fill out all fields in the Experience section.");
            return;
        }

        if (skills.length === 0) {
            setError("Please select at least one skill.");
            return;
        }

        // If all validations are passed
        console.log("Personal Details:", personalDetails);
        console.log("Education:", education);
        console.log("Experience:", experience);
        console.log("Skills:", skills);
        console.log("Projects:", projects);

        setError("");  // Reset error
        alert("Resume saved successfully!");
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4 text-primary">Edit Your Resume</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Card className="mb-4 p-4 border-primary shadow-sm rounded">
                    <h5 className="text-primary">Personal Details</h5>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={personalDetails.name}
                                    onChange={handlePersonalChange}
                                    placeholder="Enter your name"
                                    required
                                    className="form-control-lg"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={personalDetails.email}
                                    onChange={handlePersonalChange}
                                    placeholder="Enter your email"
                                    required
                                    className="form-control-lg"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={personalDetails.phone}
                                    onChange={handlePersonalChange}
                                    placeholder="Enter your phone number"
                                    pattern="^\+?\d{0,13}"
                                    required
                                    className="form-control-lg"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group controlId="linkedin">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="linkedin"
                                    value={personalDetails.linkedin}
                                    onChange={handlePersonalChange}
                                    placeholder="LinkedIn URL"
                                    className="form-control-lg"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>

                <Card className="mb-4 p-4 border-primary shadow-sm rounded">
                    <h5 className="text-primary">Education</h5>
                    {education.map((edu, index) => (
                        <Row key={index} className="mb-3">
                            <Col lg={3}>
                                <Form.Control
                                    type="text"
                                    placeholder="Degree"
                                    value={edu.degree}
                                    onChange={(e) => {
                                        const updatedEducation = [...education];
                                        updatedEducation[index].degree = e.target.value;
                                        setEducation(updatedEducation);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={3}>
                                <Form.Control
                                    type="text"
                                    placeholder="Institution"
                                    value={edu.institution}
                                    onChange={(e) => {
                                        const updatedEducation = [...education];
                                        updatedEducation[index].institution = e.target.value;
                                        setEducation(updatedEducation);
                                    }}
                                    pattern="^[A-Za-z\s]+$"
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    as="select"
                                    value={edu.startYear}
                                    onChange={(e) => {
                                        const updatedEducation = [...education];
                                        updatedEducation[index].startYear = e.target.value;
                                        setEducation(updatedEducation);
                                    }}
                                    required
                                    className="form-control-lg"
                                >
                                    <option value="">Start Year</option>
                                    {yearRange(2000, new Date().getFullYear()).map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    as="select"
                                    value={edu.endYear}
                                    onChange={(e) => {
                                        const updatedEducation = [...education];
                                        updatedEducation[index].endYear = e.target.value;
                                        setEducation(updatedEducation);
                                    }}
                                    required
                                    className="form-control-lg"
                                >
                                    <option value="">End Year</option>
                                    {yearRange(2000, new Date().getFullYear()).map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    type="text"
                                    placeholder="Percentage"
                                    value={edu.percentage}
                                    onChange={(e) => {
                                        const updatedEducation = [...education];
                                        updatedEducation[index].percentage = e.target.value;
                                        setEducation(updatedEducation);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                        </Row>
                    ))}
                    <Button variant="primary" onClick={handleAddEducation} className="w-100 mb-3">
                        Add More Education
                    </Button>
                    {errorEducation && <Alert variant="danger">{errorEducation}</Alert>}
                </Card>

                <Card className="mb-4 p-4 border-primary shadow-sm rounded">
                    <h5 className="text-primary">Work Experience</h5>
                    {experience.map((exp, index) => (
                        <Row key={index} className="mb-3">
                            <Col lg={3}>
                                <Form.Control
                                    type="text"
                                    placeholder="Company"
                                    value={exp.company}
                                    onChange={(e) => {
                                        const updatedExperience = [...experience];
                                        updatedExperience[index].company = e.target.value;
                                        setExperience(updatedExperience);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={3}>
                                <Form.Control
                                    type="text"
                                    placeholder="Role"
                                    value={exp.role}
                                    onChange={(e) => {
                                        const updatedExperience = [...experience];
                                        updatedExperience[index].role = e.target.value;
                                        setExperience(updatedExperience);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    type="text"
                                    placeholder="Duration"
                                    value={exp.duration}
                                    onChange={(e) => {
                                        const updatedExperience = [...experience];
                                        updatedExperience[index].duration = e.target.value;
                                        setExperience(updatedExperience);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Description"
                                    value={exp.description}
                                    onChange={(e) => {
                                        const updatedExperience = [...experience];
                                        updatedExperience[index].description = e.target.value;
                                        setExperience(updatedExperience);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                        </Row>
                    ))}
                    <Button variant="primary" onClick={handleAddExperience} className="w-100 mb-3">
                        Add More Experience
                    </Button>
                    {errorExperience && <Alert variant="danger">{errorExperience}</Alert>}
                </Card>

                <Card className="mb-4 p-4 border-primary shadow-sm rounded">
                    <h5 className="text-primary">Skills</h5>
                    <Dropdown onSelect={handleAddSkill}>
                        <Dropdown.Toggle variant="primary" id="dropdown-skills">
                            Select Skills
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {predefinedSkills.map((skill, idx) => (
                                <Dropdown.Item key={idx} eventKey={skill}>
                                    {skill}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="mt-3 d-flex flex-wrap gap-2">
                        {skills.length > 0 && skills.map((skill, idx) => (
                            <Button key={idx} variant="info" className="p-2">{skill}</Button>
                        ))}
                    </div>
                    {errorSkills && <Alert variant="danger">{errorSkills}</Alert>}
                </Card>

                <Card className="mb-4 p-4 border-primary shadow-sm rounded">
                    <h5 className="text-primary">Projects</h5>
                    {projects.map((project, index) => (
                        <Row key={index} className="mb-3">
                            <Col lg={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Project Title"
                                    value={project.title}
                                    onChange={(e) => {
                                        const updatedProjects = [...projects];
                                        updatedProjects[index].title = e.target.value;
                                        setProjects(updatedProjects);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="GitHub Link"
                                    value={project.githubLink}
                                    onChange={(e) => {
                                        const updatedProjects = [...projects];
                                        updatedProjects[index].githubLink = e.target.value;
                                        setProjects(updatedProjects);
                                    }}
                                    className="form-control-lg"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Description"
                                    value={project.description}
                                    onChange={(e) => {
                                        const updatedProjects = [...projects];
                                        updatedProjects[index].description = e.target.value;
                                        setProjects(updatedProjects);
                                    }}
                                    required
                                    className="form-control-lg"
                                />
                            </Col>
                        </Row>
                    ))}
                    <Button variant="primary" onClick={handleAddProject} className="w-100 mb-3">
                        Add More Projects
                    </Button>
                </Card>

                <Button variant="success" type="submit" className="w-100 py-2">
                    Save Resume
                </Button>
            </Form>
        </Container>
    );
};

export default EditResume;