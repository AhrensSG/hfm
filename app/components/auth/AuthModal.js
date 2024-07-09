import { plus_jakarta, poppins } from '@/font';
import React, { useState } from 'react';

export default function AuthModal({ handleAccept, handleReject }) {
    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-auto bg-white self-end" style={{ height: '95vh' }}>
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="bg-white rounded-lg text-left overflow-auto transform transition-all sm:max-w-lg sm:w-full" style={{ height: '95vh' }}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-auto">
                    <h1 className={`${poppins.className} text-center text-xl font-semibold leading-6 text-gris-antracita`}>
                        Hello Flamate Términos de Uso
                    </h1>
                    <section className={`${plus_jakarta.className} mt-2 font-normal text-sm flex flex-col gap-2 items-center`}>
                        <p>
                            Al descargar, acceder o utilizar esta aplicación, aceptas los siguientes términos y condiciones.
                            Si no estás de acuerdo con ellos, te rogamos que no utilices la app.
                        </p>
                        <ol className='list-decimal self-center pl-3'>
                            <li>
                                <h6>Registro Exclusivo por la Administración</h6>
                                <ul className='list-disc pl-3'>
                                    <li>
                                        Solo la administración de HelloFlatmate está autorizada para crear y activar perfiles de propietarios en la plataforma.
                                        Ningún usuario puede auto-registrarse como propietario sin la intervención y aprobación de la administración.
                                    </li>
                                </ul>
                            </li>
                            <li className='list-disc pl-3'>
                                <h6>Proceso de Verificación de Documentación:</h6>
                                <ul>
                                    <li>
                                        Para solicitar la activación de un perfil de propietario, los interesados deberán contactar directamente con HelloFlatmate a través de la sección dedicada en nuestra plataforma. Los propietarios potenciales deberán proporcionar toda la documentación requerida para verificar su identidad y la titularidad de la propiedad.
                                    </li>
                                </ul>
                            </li>
                            <li className='list-disc pl-3'>
                                <h6>Aprobación de la Cuenta:</h6>
                                <ul>
                                    <li>
                                        Una vez recibida y revisada la documentación, la administración de HelloFlatmate determinará si el perfil cumple con los criterios necesarios para ser activado. La decisión de aprobar o rechazar la creación de un perfil será comunicada al solicitante por los medios establecidos.
                                    </li>
                                </ul>
                            </li>
                            <li className='list-disc pl-3'>
                                <h6>Uso del Perfil:</h6>
                                <ul>
                                    <li>
                                        El perfil del propietario debe ser utilizado de acuerdo con las políticas y términos establecidos por helloflatmate. Cualquier uso indebido del perfil o de la plataforma puede resultar en la desactivación del mismo.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </section>
                </div>
                <div className={`${plus_jakarta.className} bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`}>
                    <button
                        type="button"
                        className="font-normal bg-resolution-blue w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleAccept}
                    >
                        Estoy de acuerdo
                    </button>
                </div>
            </div>
        </div>
    );
};

