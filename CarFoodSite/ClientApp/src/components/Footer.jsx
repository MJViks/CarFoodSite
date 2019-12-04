import React, { Component } from 'react';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className="bg-light py-5">
                <div className="container">
                    <div className="small text-center text-muted">MIT License</div>
                    <div className="small text-center text-muted">2019 - MJ_Viks</div>
                </div>
            </footer>
        );
    }
}