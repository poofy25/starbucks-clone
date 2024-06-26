import MenuSectionCategoryProduct from './MenuSectionCategoryProduct'

export default function MenuSectionCategorySection({ category }: { category: any }) {
  console.log(category)
  const products = category.products
  return (
    <div id={category.name} className="site-container flex flex-col gap-[50px] scroll-mt-[200px]">
      {/* HEADER */}
      <div className="flex flex-col justify-center gap-[15px] items-center w-full">
        <h2 className="text-[38px] font-[600]">{category.name}</h2>
        <p className="text-[17px] font-[400] text-center max-w-[50%]">{category.description}</p>
      </div>
      {/* PRODUCTS */}
      <div className="flex gap-[30px] flex-wrap">
        {products &&
          products.map((product: any, index: number) => (
            <MenuSectionCategoryProduct productData={product} key={index} />
          ))}
      </div>
    </div>
  )
}
