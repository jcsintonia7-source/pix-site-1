exports.handler = async (event) => {

  const token = process.env.INVICTUS_TOKEN;

  try {

    const body = JSON.parse(event.body);

    const response = await fetch(
      `https://api.invictuspay.app.br/api/public/v1/transactions?api_token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };

  }

};
