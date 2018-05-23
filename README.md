# tj-react-file-selector
​	

## 安装

```shell
npm install tj-react-file-selector --save
```



## 使用

```javascript
import FileSelector from 'tj-react-file-selector';
```

在`render`函数中使用：

```react
<FileSelector
  file={this.state.uploadFile}
  onSelectFile={this.onSelectFile}
/>
```



## 属性列表

### file

表示目前已经被选择的文件，其类型是File。

​	

### onSelectFile(file)

选择文件事件函数，当用户选中文件后，触发该事件。该函数包含一个参数file，表示被选择的文件。