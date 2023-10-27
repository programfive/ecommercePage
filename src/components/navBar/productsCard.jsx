import { IconDelete } from '../icons/iconDelete';

export function ProductsCart({
	products,
	cantProduct,
	setProducts,
	setCantProduct,
}) {
	const deleteProduct = () => {
		setProducts([]);
		setCantProduct(0);
	};
	return (
		<div className='bg-white shadow-lg w-11/12 sm:w-full m-auto rounded-xl'>
			<div className='w-full p-4 border-b border-primary-paleOrange'>
				<p className='text-neutral-veryDarkBlue font-bold'>
					Cart
				</p>
			</div>
			<div className=' p-4  '>
				{products.length <= 0 ? (
					<div className='flex justify-center items-center  h-28 '>
						<p>Your cart is empty.</p>
					</div>
				) : (
					<div>
						{products.map((product, index) => {
							return (
								<div
									key={index}
									className='flex  gap-3'>
									<img
										src={
											product
												.images[0]
												.src
										}
										width={80}
										height={80}
										className='rounded-xl'
									/>
									<div className='text-neutral-darkGrayishBlue'>
										<span>
											{product.title}
										</span>
										<p className='space-x-1'>
											<span>
												$
												{
													product.ActualPrice
												}
											</span>
											<span>
												x{' '}
												{
													cantProduct
												}
											</span>
											<strong className='text-neutral-veryDarkBlue font-bold'>
												$
												{product.ActualPrice *
													cantProduct}
											</strong>
										</p>
									</div>
									<button
										onClick={
											deleteProduct
										}>
										<IconDelete />
									</button>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
