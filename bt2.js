function printFibonacci(n) {
    let a = 0, b = 1; // Khởi tạo 2 số đầu tiên
    let result = [a, b]; // Lưu dãy vào mảng

    for (let i = 2; i < n; i++) {
        let next = a + b; // Tính số tiếp theo
        result.push(next); // Thêm số vào mảng
        a = b; // Cập nhật giá trị cho bước tiếp theo
        b = next;
    }

    document.write(result.join(', ')); // In ra dãy Fibonacci
}

// In 20 số đầu tiên trong dãy Fibonacci
printFibonacci(20);
