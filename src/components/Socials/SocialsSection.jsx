import { GithubButton, LinkedInButton } from "../index"
export const SocialsSection = () => {
    return (
        <div className='order-3 mt-3 d-flex justify-content-center align-items-center  mb-lg-0 w-50 mx-auto'>
            <div className='d-flex justify-content-center gap-4 me-0 me-lg-3'>
                <LinkedInButton />
                <GithubButton />
            </div>
        </div>
    )
}