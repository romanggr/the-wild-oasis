import React from 'react'
import ButtonIcon from '../../ui/ButtonIcon'
import { HiArrowRightOnRectangle } from "react-icons/hi2"
import { useLogout } from './useLogout'
import Spinner from '../../ui/Spinner'

const Logout = () => {
    const { logout, isloading } = useLogout()

    if (isloading) return <Spinner />
    return (
        <ButtonIcon disabled={isloading} onClick={logout}>
            <HiArrowRightOnRectangle />
        </ButtonIcon>
    )
}

export default Logout