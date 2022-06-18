import { useEffect, useRef, useState } from 'react'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined/Close'

import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type GalleryImageProps = {
	src: string
	label: string
}

export type GalleryProps = {
	items: GalleryImageProps[]
}

const commonSettings: SliderSettings = {
	infinite: false,
	lazyLoad: 'ondemand',
	arrows: true,
	nextArrow: <ArrowRight aria-label="next image" />,
	prevArrow: <ArrowLeft aria-label="previous image" />
}

const modalSettings: SliderSettings = {
	...commonSettings,
	slidesToShow: 1
}

const sliderSettings: SliderSettings = {
	...commonSettings,
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 1375,
			settings: {
				arrows: false,
				slidesToShow: 3.2,
				draggable: true
			}
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
				draggable: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
				draggable: true
			}
		}
	]
}

const Gallery = ({ items }: GalleryProps) => {
	const sliderRef = useRef<SlickSlider>(null)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleKeyUp = ({ key }: KeyboardEvent) => {
			key === 'Escape' && setIsOpen(false)
		}

		window.addEventListener('keyup', handleKeyUp)
		return () => {
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [])

	const onClickThumb = (index: number) => {
		setIsOpen(true)
		sliderRef.current!.slickGoTo(index, true)
	}

	return (
		<S.Wrapper>
			<Slider ref={sliderRef} settings={sliderSettings}>
				{items.map((item, index) => (
					<img
						key={item.src}
						src={item.src}
						alt={`Thumb - ${item.label}`}
						role="button"
						onClick={() => onClickThumb(index)}
					/>
				))}
			</Slider>

			<S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
				<S.Close
					role="button"
					aria-label="close modal"
					onClick={() => setIsOpen(false)}
				>
					<Close size={40} />
				</S.Close>

				<S.Content>
					<Slider ref={sliderRef} settings={modalSettings}>
						{items.map((item) => (
							<img key={item.src} src={item.src} alt={item.label} />
						))}
					</Slider>
				</S.Content>
			</S.Modal>
		</S.Wrapper>
	)
}

export default Gallery
