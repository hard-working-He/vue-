import Mock from 'mockjs';

// 模拟获取商品列表接口
Mock.mock('/api/new/products', 'get', () => {
    const mockProducts = Mock.mock({
        'list|3-8': [
            {
                'id|+1': 100,
                'name': '@ctitle(3, 8)',
                'price|10-1000.2': 0,
                'description': '@cparagraph(1, 3)'
            }
        ]
    });
    return {
        code: 200,
        message: 'success',
        data: mockProducts.list
    };
});

// 模拟添加商品接口
Mock.mock('/api/new/products', 'post', (options) => {
    const newProduct = JSON.parse(options.body);
    return {
        code: 201,
        message: 'Product added successfully',
        data: newProduct
    };
});

// 模拟获取商品详情接口
Mock.mock(/\/api\/new\/products\/\d+$/, 'get', () => {
    const mockProduct = Mock.mock({
        'id': '@integer(100, 200)',
        'name': '@ctitle(3, 8)',
        'price|10-1000.2': 0,
        'description': '@cparagraph(1, 3)'
    });
    return {
        code: 200,
        message: 'success',
        data: mockProduct
    };
});