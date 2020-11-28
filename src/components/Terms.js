import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  ...theme.spreadThis,
  textCont: {
    whiteSpace: 'pre-line',
    paddingBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '20%'
    },
  },
  topText: {
    fontWeight: 'bold',
    padding: '15% 0 2.5%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '25%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '30%',
    }
  },
  subText: {
    fontWeight: 'bold',
    padding: '2.5% 0 0',
    [theme.breakpoints.down('xs')]: {
      padding: '5% 0 0'
    }
  },
  pClass: {
    padding: '1rem 0 0'
  }
});

  class Bottom extends Component {

    render() {

      const { classes } = this.props;

      return (
        <Grid container justify="center">
          <Grid item xs={10} md={9} className={classes.textCont}>
          <Typography variant="h4" className={classes.topText}>Terms and Conditions</Typography>

            <Typography className={classes.pClass}>
              The BLK Labs website located at <a style={{ color: 'black' }} href="https://www.blklabs.co">https://www.blklabs.co</a> is a copyrighted work belonging to BLK Labs Inc. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.
            </Typography>

            <Typography className={classes.pClass}>
              All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
            </Typography>

            <Typography className={classes.pClass}>
              These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY VISITING THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Access to the Site</Typography>

            <Typography className={classes.pClass}>
              <b>Subject to these Terms.</b> Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.
            </Typography>

            <Typography className={classes.pClass}>
              <b>Certain Restrictions.</b> The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated; (e) you shall not cause or engender in any way any damage to the site, its functionality, and architecture. Any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site must be retained on all copies thereof.
            </Typography>

            <Typography className={classes.pClass}>
              Company reserves the right to change, suspend, or cease the Site with or without notice to you. You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part. No Support or Maintenance. . You agree that Company will have no obligation to provide you with any support in connection with the Site.
            </Typography>

            <Typography className={classes.pClass}>
              Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in these terms. Company and its suppliers reserve all rights not granted in these Terms.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Third-Party Links</Typography>

            <Typography className={classes.pClass}>
              <b>Third-Party Links</b> The Site may contain links to third-party websites and services, and/or display advertisements for third-parties. Such Third-Party Links are not under the control of Company, and Company is not responsible for any Third-Party Links. Company provides access to these Third-Party Links only as a convenience to you, and does not review, approve, monitor, endorse, advertise, warrant, or make any representations with respect to Third-Party Links. You use all Third-Party Links at your own risk, and you should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.
            </Typography>

            <Typography className={classes.pClass}>
              <b>Cookies and Web Beacons.</b> Like any other website, BLK Labs uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Disclaimers</Typography>

            <Typography className={classes.pClass}>
              The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We and our suppliers strive to make the Site secure and safe for use but we and our suppliers may not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.
            </Typography>

            <Typography className={classes.pClass}>
              You hereby release and forever discharge BLK Labs and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Limitation on Liability</Typography>

            <Typography className={classes.pClass}>
              To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages, or any damage arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages. BLK Labs shall not be in any case or event held liable for any damage related to the use of its website or related to its website in any way, independent of its nature and form, to you or any other user or third party. Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to yourself, your device or computer system, or loss of data resulting therefrom.
            </Typography>

            <Typography className={classes.pClass}>
              <b>Term and Termination.</b> Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, the IP address of your device, and right to access and use the Site will be banned, blocked, and terminated immediately. You understand that any termination of your access may involve blocking, banning, and/or preventing your device’s IP address in live databases. Company will not have any liability whatsoever to you for any termination of your rights under these Terms.
            </Typography>

            <Typography className={classes.pClass}>
              <b>Copyright/Trademark Information.</b> Copyright ©. All rights are reserved. All trademarks, logos, design elements, service marks, and all visual, software, and all parts of the site displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Copyright Policy.</Typography>

            <Typography className={classes.pClass}>
              Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:
            </Typography>

            <Typography className={classes.pClass}>
              “type": "ul”, "content": [ “your physical or electronic signature;”, “identification of the copyrighted work(s) that you claim to have been infringed;”, “identification of the material on our services that you claim is infringing and that you request us to remove;”, “sufficient information to permit us to locate such material;”, “your address, telephone number, and e-mail address;”, “a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and”, “a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.” ]
            </Typography>

            <Typography className={classes.pClass}>
              Please note that, pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs and attorney’s fees incurred by us in connection with the written notification and allegation of copyright infringement.
            </Typography>

            <Typography variant="h5" className={classes.subText}>General</Typography>

            <Typography className={classes.pClass}>
              These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by posting notice of the changes on our Site. Any changes to these Terms will be effective immediately upon introduction. Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.
            </Typography>

            <Typography className={classes.pClass}>
              <b>Electronic Communications.</b> The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.
            </Typography>

            <Typography className={classes.pClass}>
              <b>Entire Terms.</b> These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other. These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. Company may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon assignees.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Governing Laws</Typography>

            <Typography className={classes.pClass}>
              This terms and conditions and agreement are governed under the laws of the Federal Republic of Nigeria.
            </Typography>

            <Typography variant="h5" className={classes.subText}>Contact Information</Typography>

            <Typography className={classes.pClass}>Address: hello@blklabs.co</Typography>

            <Typography className={classes.pClass}>Email: hello@blklabs.co</Typography>

          </Grid>
        </Grid>
        );
    }
  }

  export default withStyles(styles)(Bottom);