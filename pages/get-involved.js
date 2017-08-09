import {
  Wrapper,
  NavLink
} from '../components'

export default () => (
  <Wrapper title='Get Involved'>

    <p>CampJS is a community run event. We are all volunteers and we welcome anyone who wants to help.</p>

    <p>We try to organise as much of CampJS in the open. <a href="https://github.com/campjs/campjs-next/issues">Github issues</a> is the most open place we could find that's free, has good organisational tools and supports people with different schedules. If you're interested in helping our or have general questions, the <a href="https://github.com/campjs/campjs-next/issues">github issues</a> is the best bet. Please note that our <NavLink prefetch href='/code-of-conduct'>code of conduct</NavLink> applies here.</p>

    <p>Slack works better for some people so we use that too. We do some organisation in <a href='https://wealljs.org/'>WeAllJS Slack</a> which has an amazing <a href='https://wealljs.org/code-of-conduct.html'>code of conduct</a> of it's own. Keep in mind though that slack history is quickly lost so anything that is helpful for the next event or anyone not using slack should be moved to the github issues. We are guests of WeAllJS so please make sure you follow the rules.</p>
    <p>If you would like to come join us for general chat, we are in the `campjs-viii` public channel</p>
    <p>If you would like help with organisation of CampJS, everyone is welcome, just use the command `/join-private #campjs`</p>

    <p>If you're unsure about anything, please contact one of our <NavLink prefetch href='/organisers'>organisers</NavLink> by any means. We're always happy to help.</p>

    <p>Even though CampJS has been around for a few years, we are still figuring things out. If you have any suggestions but don't feel comfortable with the above methods of communication, please let us know via our <NavLink prefetch href='/feedback'>feedback form</NavLink>.</p>

  </Wrapper>
)
