const Channels = ({ provider, account, dappcord, channels, currentChannel, setCurrentChannel }) => {
  const channelHandler = async (channel) => {
    try {
      const hasJoined = await dappcord.hasJoined(channel.id, account)
    if (hasJoined) {
      setCurrentChannel(channel)
    } else {
      const signer = await provider.getSigner()
      const transaction = await dappcord.connect(signer).mint(channel.id, { value: channel.cost })
      await transaction.wait()
      setCurrentChannel(channel)
    }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="channels">
      <div className="channels__text">
        <h2>Text Channels</h2>

        <ul>
          {channels.map((channel, index) => (
            <li
              onClick={() => channelHandler(channel)} key={index}
              className={currentChannel && currentChannel.id.toString() === channel.id.toString() ? "active" : ""}>
              {channel.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="channels__voice">
        <h2>Voice Channels</h2>

        <ul>
          <li>Channel 1</li>
          <li>Channel 2</li>
          <li>Channel 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Channels;