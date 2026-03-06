import Navbar from './shared/Navbar/Navbar'
import Homepage from './homepage/Homepage'

const MainPage = () => {
    return (
        <div className='max-w-[1550px] mx-auto'>
            <div>
                <div>
                    <Navbar />
                    <Homepage />
                </div>
            </div>
        </div>
    )
}

export default MainPage