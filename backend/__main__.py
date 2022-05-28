import uvicorn


if __name__ == '__main__':
    uvicorn.run('kroks.routes:create_app', factory=True, reload=True)
    
