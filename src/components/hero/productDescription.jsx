/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { IconCart } from '../icons/iconCart';
import { IconMinus } from '../icons/iconMinus';
import { IconPlus } from '../icons/iconPlus';

export function ProductDescription({
	setCantProduct,
	cantProduct,
	setProducts,
	product
}) {
	const [counter, setCounter] = useState(0);

	const decrementCounter = () => {
		if (counter <= 0) {
			setCounter(0);
		} else {
			setCounter(counter - 1);
		}
	};
	const incrementCounter = () => {
		setCounter(counter + 1);
	};
	const addProduct = () => {
		if (!counter <= 0) {
			setCantProduct(cantProduct + counter);
			setProducts([product]);
			setCounter(0);
		}
	};
	return (
		<>
			<div className='px-4 mb-10'>
				<span className='uppercase font-bold leading-8 text-sm tracking-widest  text-primary-orange'>
					Sneaker company
				</span>
				<h2 className='text-neutral-veryDarkBlue font-bold  text-2xl lg:text-4xl lg:my-4 capitalize my-2 text-left'>
					{product.title}
				</h2>
				<p className='text-neutral-darkGrayishBlue leading-loose mb-4'>
					{product.description}
				</p>
				<div className='flex justify-between md:my-6 items-center'>
					<div className='text-xl space-x-2 text-neutral-veryDarkBlue font-bold'>
						<span>${product.ActualPrice}</span>
						<span className='bg-primary-paleOrange  p-2 text-sm text-primary-orange rounded-lg'>
							{product.discount}%
						</span>
					</div>
					<del className='text-neutral-darkGrayishBlue'>
						${product.price}
					</del>
				</div>
				<div className='grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 mt-4'>
					<div className='flex h-full justify-between  p-4 md:px-4 md:py-0 bg-neutral-lightGrayishBlue items-center  rounded-s-xl'>
						<button onClick={decrementCounter}>
							<IconMinus />
						</button>
						<span className='text-neutral-veryDarkBlue font-bold'>
							{counter}
						</span>
						<button onClick={incrementCounter}>
							<IconPlus />
						</button>
					</div>
					<button
						onClick={addProduct}
						className='flex font-bold justify-center items-center gap-4 p-4  rounded-xl bg-primary-orange  text-white'>
						<IconCart className=' fill-white' />
						<span>Add to cart</span>
					</button>
				</div>
			</div>
		</>
	);
}
