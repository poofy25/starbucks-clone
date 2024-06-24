import MenuSectionCategoryProduct from './MenuSectionCategoryProduct'

export default function MenuSectionCategorySection({ category }: { category: any }) {
  console.log(category)
  const products = category.products
  return (
    <div id={category.name} className="site-container flex flex-col gap-[72px] scroll-mt-[200px]">
      {/* HEADER */}
      <div className="flex flex-col justify-center gap-3 items-center w-full">
        <h2 className="text-[42px] font-bold">{category.name}</h2>
        <p className="text-[16px] font-medium">{category.description}</p>
      </div>
      {/* PRODUCTS */}
      <div className="flex gap-8 flex-wrap">
        {products &&
          products.map((product: any, index: number) => (
            <MenuSectionCategoryProduct productData={product} key={index} />
          ))}
      </div>
    </div>
  )
}
