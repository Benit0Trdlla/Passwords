import { LinkedInButton } from "./Linkedin/Linkedin"
import { GithubButton } from "./Github/Github"
export const SocialsSection = () => {
    return (
        <div className='order-3 p-5 d-flex justify-content-center align-items-center mb-lg-0 w-50 mx-auto'>
            <div className='d-flex justify-content-center gap-4 me-0 me-lg-3'>
                <LinkedInButton />
                <GithubButton />
            </div>
        </div>
    )
}