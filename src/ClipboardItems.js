import React from 'react';

const ClipboardItems = ({deleteClipItem, clipItems}) => {
    const clipList = clipItems.map(item => {
        return (
            <div className="ClipboardItems" key={item.timestamp}>
                <center>
                    <h4>{item.timestamp.slice(0 ,18)}</h4>
                    <h3>{item.content}</h3>
                    <button onClick={() => {deleteClipItem(item.timestamp)}}>Delete Clip</button>
                </center>
            </div>
        )
    });
    return (
        <div className="item-list">
            {clipList}
        </div>
    );
}

export default ClipboardItems;