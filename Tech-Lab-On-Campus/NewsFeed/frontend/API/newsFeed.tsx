import React from 'react'




const newsFeed = () => {
        // Define the sendingTranscript function
        const newsFeedData = async (): Promise<
        { success: true; data: any } | { success: false; error: string }
    > => {
        try {
        const response = await fetch('http://localhost:8000/get-newsfeed');
    
        if (response.status === 200) {
            const data = await response.json();
            return { success: true, data: data };
        }
    
        return { success: false, error: 'Unexpected response status: ' + response.status };
        } catch (error: any) {
        return { success: false, error: error?.message || 'Unknown error' };
        }
    };

    const featuredArticleData = async() => {
        // Define the sendingTranscript function
        const sendingTranscript = async (): Promise<
        { success: true; data: any } | { success: false; error: string }
      > => {
        try {
          const response = await fetch('http://localhost:8000/get-featured-article"');
      
          if (response.status === 200) {
            const data = await response.json();
            return { success: true, data: data };
          }
      
          return { success: false, error: 'Unexpected response status: ' + response.status };
        } catch (error: any) {
          return { success: false, error: error?.message || 'Unknown error' };
        }
      };
    }

  return {
    newsFeedData,
    featuredArticleData

    
}
}

export default newsFeed