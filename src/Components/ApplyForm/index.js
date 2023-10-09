import React, { useState ,useEffect,} from 'react';
import './index.css';
import Header from '../Header';
import { useParams,useNavigate } from 'react-router-dom';

const ApplyForm = () => {
    const [applyName, setApplyName] = useState('');
    const [applyEmail, setApplyEmail] = useState('');
    const [applyNote, setApplyNote] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeURL, setResumeURL] = useState('');
    console.log(resumeURL)
    const { id } = useParams();
    const [jobid, setJobid] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        setJobid(id);
    }, [id]);

    const handleSubmitApply = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', applyName);
        formData.append('email', applyEmail);
        formData.append('note', applyNote);
        formData.append('resume', resumeFile);
        formData.append('jobid', id);
        const formDataObject = {
            name: applyName,
            email: applyEmail,
            note: applyNote,
            id: jobid,
            resume: resumeFile ? resumeFile.name : null,
        };
        const existingFormData = JSON.parse(localStorage.getItem('formData')) || [];
        existingFormData.push(formDataObject);
        const formDataArrayJSON = JSON.stringify(existingFormData);
        localStorage.setItem('formData', formDataArrayJSON);
        navigate("/success")
    };


    const handleResumeFileChange = (e) => {
        const file = e.target.files[0];
        setResumeFile(file);
        const fileURL = URL.createObjectURL(file);
        setResumeURL(fileURL);
    };

    return (
        <>
            <Header />
            <div className="applyFormContainer">
                <h3>Apply Form</h3>
                <form onSubmit={handleSubmitApply}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="Name"
                            value={applyName}
                            onChange={(e) => setApplyName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Email"
                            value={applyEmail}
                            onChange={(e) => setApplyEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="note">Cover Letter Note</label>
                        <br />
                        <textarea
                            id="note"
                            required
                            placeholder="Cover Letter Note"
                            value={applyNote}
                            onChange={(e) => setApplyNote(e.target.value)}
                            rows={5}
                            cols={40}
                        />
                    </div>
                    <div>
                        <label htmlFor="resume">Resume Upload</label>
                        <br />
                        <input
                            type="file"
                            id="resume"
                            required
                            onChange={handleResumeFileChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ApplyForm;
