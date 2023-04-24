type Props = {
  params: {
    slug: string;
  }
}

export default function PantsPage({params}:Props) {
  return <h1>{params.slug} 제품 설명 페이지</h1>
}

// 미리 만들어 놓는 것
export function generateStaticParams() {
  const products = ['pants','skirt'];
  return products.map(product => ({
    slug: product
  }))
}