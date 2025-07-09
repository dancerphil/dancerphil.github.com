const formatter = (results) => {
    const files = results.map(result => result.filePath);
    // 去重，因为一个文件可能有多个错误，但我们只想要一次文件名
    const uniqueFiles = [...new Set(files)];
    return uniqueFiles.join('\n');
};

export default formatter;
