import React from 'react';
import { LinkedinIcon, EmailShareButton, EmailIcon } from 'react-share';
import { FaGithub } from 'react-icons/fa';
import { InlineWidget } from "react-calendly";

function Contact() {
    return (
        <div>
            <h1 className="text-4xl font-bold mt-32 ml-10 text-[#6EACDA]">Lets get in touch</h1>
            <div>
                <div className="pd-0 mt-10 ml-10">

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/miguelscduarte/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-auto"
                        >
                            <LinkedinIcon size={40} iconFillColor={"#FFFFFF"} round />
                        </a>

                        <span className="text-gray-600 font-medium">
                            https://www.linkedin.com/in/miguelscduarte/
                        </span>
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        <EmailShareButton
                            url="https://yourwebsite.com"
                            subject="Check this out!"
                            body="I thought you might be interested in this content: "
                        >
                            <EmailIcon size={40} round />
                        </EmailShareButton>

                        <span className="text-gray-600 font-medium">
                            myemail@gmail.com
                        </span>
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        <a
                            href="https://github.com/miguelsantoscoelhoduarte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#333333] hover:text-[#24292e] transition-colors"
                        >
                            <FaGithub size={40} />
                        </a>

                        <span className="text-gray-600 font-medium">
                            https://github.com/miguelsantoscoelhoduarte
                        </span>
                    </div>

                    <InlineWidget
                        url="https://calendly.com/miguelsantoscoelhoduarte"
                        styles={{ height: '700px' }}
                        utm={{ utmSource: 'facebook', utmCampaign: 'spring_sale' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact;