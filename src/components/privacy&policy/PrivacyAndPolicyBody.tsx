"use client";

import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function PrivacyAndPolicyBody() {
  const [selectedTitle, setSelectedTitle] = useState("home");
  return (
    <div className=" px-5 pt-5 sm:pt-10 grid grid-cols-12 gap-5 sm:gap-16 pb-5 sm:pb-10">
      <div className=" col-span-12 lg:col-span-4">
        <div className=" w-full">
          <Link
            className=""
            to="Description of Our Service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Description of Our Service
            </p>
          </Link>
          <Link
            className=""
            to="Restriction Use of Our Service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Restriction Use of Our Service
            </p>
          </Link>
          <Link
            className=""
            to="Registration and Membership"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Registration and Membership
            </p>
          </Link>
          <Link
            className=""
            to="Content on oggoair"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Content on oggoair
            </p>
          </Link>
          <Link
            className=""
            to="Links to Other Site"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Links to Other Site
            </p>
          </Link>
          <Link
            className=""
            to="Privacy Policy"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Privacy Policy
            </p>
          </Link>
          <Link
            className=""
            to="Advertisement"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Advertisement
            </p>
          </Link>
          <Link
            className=""
            to="Ratings"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Ratings
            </p>
          </Link>
          <Link
            className=""
            to="Intellectual Property"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Intellectual Property
            </p>
          </Link>
          <Link
            className=""
            to="Changes and Availability of oggoair Operation"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Changes and Availability of oggoair Operation
            </p>
          </Link>
          <Link
            className=""
            to="Termination of oggoair Operation"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Termination of oggoair Operation
            </p>
          </Link>
          <Link
            className=""
            to="Changes of Terms of Use"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Changes of Terms of Use
            </p>
          </Link>
          <Link
            className=""
            to="Disclaimer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Disclaimer
            </p>
          </Link>
          <Link
            className=""
            to="Limitation of Liability"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Limitation of Liability
            </p>
          </Link>
          <Link
            className=""
            to="Indemnification"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Indemnification
            </p>
          </Link>
          <Link
            className=""
            to="Governing Law and Jurisdiction"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Governing Law and Jurisdiction
            </p>
          </Link>
          <Link
            className=""
            to="General"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              General
            </p>
          </Link>
          <Link
            className=""
            to="Force Majeur"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Force Majeur
            </p>
          </Link>
          <Link
            className=""
            to="Interpretation"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Interpretation
            </p>
          </Link>
          <Link
            className=""
            to="Severability"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Severability
            </p>
          </Link>
          <Link
            className=""
            to="Survival"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Survival
            </p>
          </Link>
          <Link
            className=""
            to="Logos & Trademarks"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Logos & Trademarks
            </p>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 lg:col-span-8 ">
        <div id="Description of Our Service">
          <p className=" text-lg sm:text-2xl font-bold">
            Description of Our Service
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair is your go-to platform for personalized flight and property
            information, sorted from lowest to highest cost. We provide detailed
            Flight and Hotel names, along with comprehensive information, prices
            per passenger or guests, and the option to book mixed airlines
            within a single itinerary. Our proprietary algorithm ranks data
            aggregated from various reliable sources. oggoair constantly updates
            its collection of flight tickets from government and private-owned
            airlines. For comprehensive information on your booked flight, it is
            advisable to consult relevant government agencies in your country of
            residence before departure. Trust oggoair to enhance your travel
            experience with reliable and up-to-date information.
          </p>
        </div>
        <div className=" mt-7" id="Restriction Use of Our Service">
          <p className=" text-lg sm:text-2xl font-bold">
            Restriction Use of Our Service
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair is intended for private and personal use only. Any other use
            requires explicit written consent. While using oggoair, you agree
            not to purposefully or carelessly engage in activities beyond the
            permitted purposes:
          </p>
          <ul className=" pl-10 pl-10 list-decimal mt-3">
            <li>The use of z is subject to certain restrictions.</li>
            <li>
              Users must refrain from interfering with or disrupting the
              functionality of oggoair.
            </li>
            <li>
              It is important to comply with our Terms of Use and any other
              instructions provided by the company and its officers.
            </li>
            <li>
              The use of robots, crawlers, or similar applications to collect
              content from oggoair is not permitted. Displaying oggoair or any
              of its parts within an exposed or concealed frame is prohibited.
            </li>
            <li>
              Users must not violate any applicable local, state, national, or
              international laws, regulations, statutes, or ordinances.
            </li>
            <li>
              Impersonating any person or entity, making false statements about
              identity, jobs, agency, or affiliation is strictly prohibited.
            </li>
            <li>
              Additionally, linking certain elements on oggoair without
              permission to their original web pages is not allowed.
            </li>
          </ul>
        </div>
        <div className=" mt-7" id="Registration and Membership">
          <p className=" text-lg sm:text-2xl font-bold">
            Registration and Membership
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`oggoair's services are accessible to all Internet users, but
            certain features such as saving and adding passenger lists are
            exclusive to registered users. During registration, you will be
            asked to provide accurate personal details including age, gender,
            and email address. Failure to provide true and complete information
            may result in registration failure and hinder our ability to provide
            services or contact you. Mandatory fields will be explicitly
            specified, and without entering the required data, registration will
            be impossible. By submitting the registration form, you confirm that
            the details provided adhere to our Terms of Use. For login, a
            personal username and password must be used. Additional or different
            identification may be required periodically. Maintain strict
            confidentiality of your login credentials, change your password
            regularly, and never disclose it to others. You are fully
            responsible for any consequences arising from the provision of false
            or incomplete details during registration, as well as for any
            unauthorized account usage. We reserve the right to deny or cancel
            individual subscriptions at our discretion. Notification of
            subscription cancellation will be sent to your registered email
            address, with the cancellation taking effect as specified in the
            message. Immediate effect of cancellation is possible.`}
          </p>
        </div>
        <div className=" mt-7" id="Content on oggoair">
          <p className=" text-lg sm:text-2xl font-bold">Content on oggoair</p>
          <p className=" text-gray-600 mt-5 text-justify">
            As a user of oggoair, you have the ability to upload, distribute,
            email, and transmit your content on our website. We provide various
            services and opportunities for content usage. However, we do not
            guarantee indefinite posting or warrant the posting of all content
            you wish to share. By uploading content, you acknowledge your full
            responsibility for any consequences arising from it. You must ensure
            that your content and its use on oggoair comply with the law. Please
            refrain from posting content that can reasonably be considered as
            outlined below:
          </p>
          <ul className=" mt-3 pl-10 list-decimal">
            <li>
              Content that infringes or violates intellectual property rights,
              including copyrights and trademarks;
            </li>
            <li>False and misleading information;</li>
            <li>
              Malicious applications such as software viruses, Trojan Horses,
              Worms, Spyware, etc.;
            </li>
            <li>
              Content that encourages, supports, or provides instructions for
              criminal offenses;
            </li>
            <li>
              Defamatory or privacy-violating content; Commercial content
              without prior written consent;
            </li>
            <li>
              Posting information prohibited by applicable laws or court
              restraining orders;
            </li>
            <li>
              Threatening, abusive, harassing, libelous, vulgar, obscene,
              racist, or objectionable content;
            </li>
            <li>
              Sharing passwords, usernames, or other details to access software,
              digital files, websites, or services without proper payment or
              registration.
            </li>
          </ul>
          <p className=" mt-3 text-gray-600">
            While promoting free speech and open discussion, oggoair reserves
            the right to review and delete posted content to prevent misuse of
            our services. This includes content found to violate our Terms of
            Use, either through our own assessment or based on user complaints.
            Please note that we are not obligated to review and monitor every
            user on oggoair. Additionally, your content may be deleted after a
            certain period of time, and previously posted content may not be
            accessible. Use caution and discretion when interacting with online
            content, including user comments and rankings. We do not endorse the
            credibility, authenticity, accuracy, or integrity of user-generated
            content. Seek professional consultation when necessary for content
            evaluation.
          </p>
        </div>
        <div className=" mt-7" id="Links to Other Site">
          <p className=" text-lg sm:text-2xl font-bold">Links to Other Site</p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair permits certain links to external websites but does not
            operate or monitor these sites. If you encounter information or
            content on linked websites that is incompatible with your
            requirements or objectionable, please report it to oggoair. Linking
            to a website does not imply endorsement or sponsorship of its
            content, nor does it guarantee accuracy, reliability, validity, or
            legality.
          </p>
        </div>
        <div className=" mt-7" id="Privacy Policy">
          <p className=" text-lg sm:text-2xl font-bold">Privacy Policy</p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`We prioritize the protection of your data and respect your privacy. We employ reasonable physical and electronic measures to ensure data security. Your data will be used solely for providing our services to you based on your interests and for the development of our services. If necessary, we may share your data with our affiliates, service providers, and suppliers to fulfill your requested services. We may provide links to third-party websites that are not owned or controlled by us, and they are governed by separate user Terms and Conditions. When accessing and using our services, you agree not to engage in unauthorized or illegal activities on our website or with the content. The content and website should not be used for commercial purposes. Violation of these terms may result in oggoair exercising its right to file a legal suit. We highly value your privacy and take reasonable measures to protect your data both physically and electronically. Your data will only be used to provide you with our services based on your interests and for the improvement of our offerings. However, if necessary, we may share your data with our affiliates, service providers, and suppliers to fulfill your requested services. Please note that any links to third-party websites provided on our platform are not owned or controlled by us, and they are subject to separate user Terms and Conditions. By accessing and using our services, you agree not to engage in unauthorized or illegal activities on our website or with the content. The content and website are not to be used for commercial purposes. Violations of these terms may result in oggoair pursuing legal action.`}
          </p>
        </div>
        <div className=" mt-7" id="Advertisement">
          <p className=" text-lg sm:text-2xl font-bold">Advertisement</p>
          <p className=" text-gray-600 mt-5 text-justify">
            By continuing to use our services and reading this section, you
            acknowledge that you have read, understood, and agreed to the
            accessibility of your personal information by us. Please note that
            this policy is subject to change without prior notice. We recommend
            visiting this page periodically to stay updated on any changes and
            to ensure your ongoing agreement with our Terms of Use. If you do
            not agree with the terms outlined in this section, we advise you to
            discontinue using our services. Should you have any questions,
            please feel free to contact us. Personal Data collection oggoair
            collects various types of personal data including your name, date of
            birth, nationality, phone number, email address, IC number, passport
            information, oggoair account details, credit card information
            (expiry date and card number) for payment processing, and
            transaction history. If you connect your oggoair account to your
            social media accounts, we may exchange information with the social
            media provider with your permission. We may also send you emails
            related to activities that may be of interest to you, such as
            newsletters and price alerts. Additionally, we collect information
            such as your location, IP address, browser, device details, search
            history, clicks, pages visited, time spent on our websites, and
            language settings. Cookies are used to enhance your user experience.
            All collected personal data will be stored in our API.
          </p>
        </div>
        <div className=" mt-7" id="Ratings">
          <p className=" text-lg sm:text-2xl font-bold">Ratings</p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`We invite you to experience our expertise firsthand. Let's schedule a discussion at your convenience to explore how our services can meet your needs.`}
          </p>
        </div>
        <div className=" mt-7" id="Intellectual Property">
          <p className=" text-lg sm:text-2xl font-bold">
            Intellectual Property
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            All rights, title, and interest in and to oggoair (excluding
            user-generated content) are owned and licensed by oggoair Company,
            including patents, copyrights, trademarks, trade names, service
            marks, trade secrets, and other intellectual property rights
            associated with it. You are prohibited from copying, distributing,
            displaying, sublicensing, decompiling, disassembling, adapting,
            making commercial use of, compiling, translating, selling, lending,
            renting, manipulating, merging with other software, modifying, or
            creating derivative works of any content on oggoair that is subject
            to intellectual property rights, unless expressly permitted in these
            Terms of Use. You are not permitted to remove, erase, or distort any
            ownership-related messages or signs, such as copyright or trademark
            symbols, within the content on oggoair. We do not claim ownership
            over the content you upload to oggoair. However, by uploading
            content, you represent and warrant that you have the rightful
            ownership or appropriate licensing rights for the content. By
            submitting content to oggoair, you grant us a free, worldwide,
            non-exclusive license with unlimited duration to copy, distribute,
            publicly display, sublicense, decompile, disassemble, make available
            to the public, adapt, make commercial use of, compile, translate,
            merge with other software, modify, and create derivative works of
            the content across various communication and information networks,
            platforms, applications, services, printed publications, and
            physical products.
          </p>
        </div>
        <div
          className=" mt-7"
          id="Changes and Availability of oggoair Operation"
        >
          <p className=" text-lg sm:text-2xl font-bold">
            Changes and Availability of oggoair Operation
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            The statement you provided indicates that oggoair, a platform or
            service, may undergo periodic changes to its layout, design,
            display, content, and services without prior notice. These changes
            may initially cause inconvenience or malfunctions. The company
            states that it does not hold any responsibility for these changes or
            any resulting malfunctions or failures. Additionally, the
            availability and functionality of oggoair are subject to various
            factors, such as software, hardware, and communication networks
            between the company, its contractors, and suppliers. The company
            does not provide a warranty or guarantee that the operation of
            oggoair will be uninterrupted, free from disruption, or immune to
            unauthorized access or errors. In summary, the company acknowledges
            the possibility of changes and potential issues with oggoair but
            disclaims any responsibility for them, as well as any guarantees of
            uninterrupted operation or error-free performance.
          </p>
        </div>
        <div className=" mt-7" id="Termination of oggoair Operation">
          <p className=" text-lg sm:text-2xl font-bold">
            Termination of oggoair Operation
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`We reserve the right to cease the operation of oggoair or any portion thereof, either temporarily or permanently, at our discretion. Prior notice may not be provided for such discontinuation. Therefore, we retain the option to block, remove, or delete any content on oggoair's website without keeping any backup copies.`}
          </p>
        </div>
        <div className=" mt-7" id="Changes of Terms of Use">
          <p className=" text-lg sm:text-2xl font-bold">
            Changes of Terms of Use
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            Please note that our Terms of Use are subject to periodic updates,
            and it is your responsibility to stay informed about any changes. By
            using our services, you agree to be bound by any modifications made
            to our Terms of Use.
          </p>
        </div>
        <div className=" mt-7" id="Disclaimer">
          <p className=" text-lg sm:text-2xl font-bold">Disclaimer</p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair is provided for usage purposes only. oggoair Company
            explicitly disclaims all warranties and representations, whether
            expressed or implied, regarding oggoair. This includes, but is not
            limited to, warranties of merchantability, fitness for a particular
            purpose, quality, non-infringement, title, compatibility,
            performance, security, or accuracy. Our company does not guarantee
            uninterrupted or error-free operation of oggoair, nor that it will
            always be available or free from harmful components. By using
            oggoair, you agree and acknowledge that you do so at your own risk
            and in compliance with applicable laws.
          </p>
        </div>
        <div className=" mt-7" id="Limitation of Liability">
          <p className=" text-lg sm:text-2xl font-bold">
            Limitation of Liability
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`Our company, including its officers, directors, shareholders, employees, sub-contractors, and agents, will not be held liable, to the extent permitted by applicable law, for any direct, indirect, incidental, consequential, or other damages, including but not limited to loss of profits, data, costs, expenses, and payments. This liability applies in tort, contract, or any other form arising from or related to the use or inability to use oggoair, including any failures, errors, breakdowns, faults, or mistakes by our staff or representatives, or reliance on posted content. In such cases, your sole recourse is limited to the correction of errors or malfunctions, resulting in a potential refund at our company's discretion, based on relevant circumstances and subscription fees.`}
          </p>
        </div>
        <div className=" mt-7" id="Indemnification">
          <p className=" text-lg sm:text-2xl font-bold">Indemnification</p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`By using oggoair, I agree not to hold any threats or harm to oggoair company, its managers, directors, shareholders, employees, sub-contractors, agents, or anyone acting on their behalf for any damages or loss incurred, including costs, payments, and reasonable legal fees. This includes any claims or demands arising from or related to my use of oggoair, breach of the Terms of Use, or violation of other persons' rights or applicable rules and regulations.`}
          </p>
        </div>
        <div className=" mt-7" id="Governing Law and Jurisdiction">
          <p className=" text-lg sm:text-2xl font-bold">
            Governing Law and Jurisdiction
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`In the event of any complaints or disagreements, I agree to submit a report through the feedback channel provided by oggoair, as per the Terms of Use. oggoair's Terms of Use and the relationship between me and oggoair shall be governed by the laws of the Republic of Indonesia.`}
          </p>
        </div>
        <div className=" mt-7" id="General">
          <p className=" text-lg sm:text-2xl font-bold">General</p>
          <p className=" text-gray-600 mt-5 text-justify">
            The Terms of Use between me and oggoair constitute the complete
            agreement for service usage and supersede any previous agreements.
            No waiver, concession, extension, representation, alteration,
            addition, or derogation from the Terms of Use shall be valid unless
            explicitly consented to in writing by an authorized representative
            of oggoair. Failure by oggoair to enforce any provision of these
            Terms of Use does not waive its rights under these terms.
          </p>
        </div>
        <div className=" mt-7" id="Force Majeur">
          <p className=" text-lg sm:text-2xl font-bold">Force Majeur</p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair explicitly disclaims any responsibility for damages or
            losses resulting from natural disasters (such as floods,
            earthquakes, tsunamis, volcano eruptions, storms, typhoons, and
            avalanches), war, military actions, changes in laws, terrorism,
            property bankruptcy, or airline bankruptcy. oggoair shall not be
            held liable for any adverse consequences arising from these events.
          </p>
        </div>
        <div className=" mt-7" id="Interpretation">
          <p className=" text-lg sm:text-2xl font-bold">Interpretation</p>
          <p className=" text-gray-600 mt-5 text-justify">
            The section headings included in these Terms of Use are provided for
            convenience purposes only and do not affect the interpretation or
            construction of the agreement. They are not intended to be legally
            binding or to alter the meaning of any provisions within the Terms
            of Use. The headings are purely organizational and do not carry any
            legal significance in relation to the content of the agreement.
          </p>
        </div>
        <div className=" mt-7" id="Severability">
          <p className=" text-lg sm:text-2xl font-bold">Severability</p>
          <p className=" text-gray-600 mt-5 text-justify">
            If any provision in these Terms of Use is deemed illegal, invalid,
            or unenforceable by a competent court, it shall be enforced to the
            maximum extent permitted by law. The remaining provisions of these
            Terms of Use shall remain in full force and effect. The invalidity
            or unenforceability of any specific provision does not affect the
            validity or enforceability of the other provisions contained within
            the Terms of Use.
          </p>
        </div>
        <div className=" mt-7" id="Survival">
          <p className=" text-lg sm:text-2xl font-bold">Survival</p>
          <p className=" text-gray-600 mt-5 text-justify">
            The provisions relating to intellectual property, disclaimer of
            warranties, limitation of liability, and indemnification shall
            remain in effect even after the termination or expiration of these
            Terms of Use. These provisions continue to govern the respective
            rights, obligations, disclaimers, limitations, and indemnification
            obligations of the parties beyond the conclusion of the agreement.
            The termination or expiration of these Terms of Use does not affect
            the applicability and enforceability of these specific provisions.
          </p>
        </div>
        <div className=" mt-7" id="Logos & Trademarks">
          <p className=" text-lg sm:text-2xl font-bold">Logos & Trademarks</p>
          <p className=" text-gray-600 mt-5 text-justify">
            All logos and trademarks displayed on the oggoair website are the
            lawful property of their respective owners. oggoair acknowledges and
            respects the ownership rights of these logos and trademarks, and
            their display on the website does not imply any endorsement,
            sponsorship, or affiliation with oggoair unless explicitly stated.
            The use of these logos and trademarks is solely for informational
            purposes, and oggoair does not claim any ownership rights over them.
          </p>
        </div>
      </div>
    </div>
  );
}
