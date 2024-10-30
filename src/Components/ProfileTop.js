import { Fragment, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import profilePicPlaceholder from '../Asset/Images/coverPic.JPG';
import axios from 'axios';
import {toast} from "react-toastify";

function ProfileTop(props) {
    const messId = localStorage.getItem('messId');
    const [selectedFile, setSelectedFile] = useState(null);
    const [profile, setProfile] = useState({
        profilePic: profilePicPlaceholder,
    });

    const changeProfilePic = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);  // Store the selected file for later use
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ profilePic: reader.result }); // Preview the image
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/profile/${messId}`)
            .then((res) => {
                const profileData = res.data.data;
                if (profileData.profilePic) {
                    setProfile({ profilePic: profileData.profilePic });
                }
            })
            .catch((error) => {
                console.error("Error fetching profile data:", error);
            });
    }, [messId]);

    const updateProfile = (e) => {
        e.preventDefault();

        if (!selectedFile) {
            console.error("No file selected");
            toast.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("profilePic", selectedFile);
        axios.put(`http://localhost:8080/profile/${messId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                toast.success(response.data.message);
                console.log(response);
            })
            .catch((err)=>{
                console.log(err);
                toast.error(err.message);
            });
    };

    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div
                    className="coverPic"
                    style={{
                        backgroundImage: `url(${profile.profilePic})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        minHeight: '350px',
                        marginTop: '-60px',
                    }}
                >
                    <Row>
                        <div className="coverPicOverLay">
                            <img className="profile" src={profile.profilePic} alt="Profile" />
                            <Row>
                                <div className="imgUpload">
                                    <input type="file" id="profile-photo" onChange={changeProfilePic} className="form-control w-25" />
                                    <Button variant="outline-dark" className="w-25 uploadBtn" onClick={updateProfile}>Upload Your Profile</Button><br />
                                </div>
                            </Row>
                        </div>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default ProfileTop;
