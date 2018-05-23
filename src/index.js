import React from 'react';
import Dropzone from 'react-dropzone'

class FileSelector extends React.Component {

  render() {
    const { file, onSelectFile } = this.props;

    return (
      <div className="tj-react-file-selector">
        <Dropzone style={{}} onDrop={(files) => {
          let f = (files && files.length) ? files[0] : null;
          onSelectFile(f);
        }}>
          <p>
            {(function (f) {
              if (f) {
                let str = f.name + ' - ' + f.size + '字节';
                return str;
              } else {
                return '点击此处选择文件，您也可以直接拖拽文件至此';
              }
            })(file)}
          </p>
        </Dropzone>
      </div>
    )
  }
}

export default FileSelector;