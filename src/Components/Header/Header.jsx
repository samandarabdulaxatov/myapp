import React from 'react'
import './Header.css'
import Logo from '../../Assets/Image/user-icon.jpg'

function Header() {
	return (
		<>
			<header className='site-header'>
				<div className='container site-header__container'>
					<a className='site-logo' href=''>
						<img
							className='site-logo__img'
							src={Logo}
							alt=''
							width={53}
							height={53}
						/>
						<p className='site-user'>Samandar Abdulaxatov</p>
					</a>
					<button className='site-header__toggler' type='button'></button>
					<ul className='site-header__list'>
						<li className='site-header__item'>
							<a className='site-header__link' href=''>
								Location
							</a>
						</li>
						<li className='site-header__item'>
							<a
								className='site-header__link'
								href='https://t.me/samandarabdulaxatov'>
								Blogs
							</a>
						</li>
						<li className='site-header__item'>
							<a className='site-header__link' href=''>
								Testimonials
							</a>
						</li>
						<li className='site-header__item'>
							<a className='site-header__link' href=''>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}

export default Header
